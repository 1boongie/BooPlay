// src/lib/auth.ts (or your auth config file)

import { apiKey } from '@better-auth/api-key';
import { betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { env as privateEnv } from '$env/dynamic/private';
import { env as publicEnv } from '$env/dynamic/public';
import { db } from './server/db';
import * as schema from './server/db/schema';
import { uploadProfilePicture } from './server/s3';
import { generateUsername } from './utils/random';

if (!privateEnv.DISCORD_CLIENT_ID) throw new Error('DISCORD_CLIENT_ID is not set');
if (!privateEnv.DISCORD_CLIENT_SECRET) throw new Error('DISCORD_CLIENT_SECRET is not set');
if (!publicEnv.PUBLIC_BETTER_AUTH_URL) throw new Error('PUBLIC_BETTER_AUTH_URL is not set');

export const auth = betterAuth({
	//    baseURL: publicEnv.PUBLIC_BETTER_AUTH_URL,
	secret: privateEnv.PRIVATE_BETTER_AUTH_SECRET,
	appName: 'BooPlay',

	trustedOrigins: [
		publicEnv.PUBLIC_BETTER_AUTH_URL,
		'https://booplay.fun',
		'http://booplay.fun',
		'http://localhost:5173',
		'http://localhost:4173'
	],

	plugins: [
		apiKey({
			defaultPrefix: 'rgpl_',
			rateLimit: {
				enabled: true,
				timeWindow: 1000 * 60 * 60 * 24, // 1 day
				maxRequests: 2000 // 2000 requests per day
			},
			permissions: {
				defaultPermissions: {
					api: ['read']
				}
			}
		})
	],
	database: drizzleAdapter(db, {
		provider: 'pg',
		schema: schema
	}),
	socialProviders: {
		discord: {
			clientId: privateEnv.DISCORD_CLIENT_ID,
			clientSecret: privateEnv.DISCORD_CLIENT_SECRET,
			redirectURI: `${publicEnv.PUBLIC_BETTER_AUTH_URL}/api/auth/callback/discord`, //ADDED!!
			mapProfileToUser: async (profile) => {
				const newUsername = generateUsername();
				const _s3ImageKey: string | null = null;

				/*if (profile.picture) {
					try {
						const response = await fetch(profile.picture);
						if (!response.ok) {
							console.error(`Failed to fetch profile picture: ${response.statusText}`);
						} else {
							const blob = await response.blob();
							const arrayBuffer = await blob.arrayBuffer();
							s3ImageKey = await uploadProfilePicture(
								profile.sub,
								new Uint8Array(arrayBuffer),
								blob.type || 'image/jpeg'
							);
						}
					} catch (error) {
						console.error('Failed to upload profile picture during social login:', error);
					}
				}*/

				return {
					name: profile.display_name || profile.username,
					email: profile.email,
					image: null, //s3ImageKey,
					username: newUsername
				};
			}
		}
	},
	user: {
		additionalFields: {
			username: { type: 'string', required: true, input: false },
			isBanned: { type: 'boolean', required: false, input: false },
			banReason: { type: 'string', required: false, input: false },
			baseCurrencyBalance: { type: 'string', required: false, input: false },
			bio: { type: 'string', required: false },
			volumeMaster: { type: 'string', required: false, input: false },
			volumeMuted: { type: 'boolean', required: false, input: false }
		}
	},
	session: {
		cookieCache: {
			enabled: true,
			maxAge: 60 * 5
		}
	},
	advanced: {
		database: {
			generateId: false
		}
	}
});
