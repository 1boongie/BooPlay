import type en from './en';

const achievementItems = {
	first_buy: {
		name: 'Primeira Compra',
		description: 'Compre qualquer moeda pela primeira vez'
	},
	first_sell: {
		name: 'Mãos de Papel',
		description: 'Venda uma moeda pela primeira vez'
	},
	trades_50: {
		name: 'Frequente do Mercado',
		description: 'Conclua 50 negociações'
	},
	trades_500: {
		name: 'Máquina de Trading',
		description: 'Conclua 500 negociações'
	},
	trades_5000: {
		name: 'Lobo de Wall Street',
		description: 'Conclua 5.000 negociações'
	},
	dip_buyer: {
		name: 'Comprador de Queda',
		description: 'Compre uma moeda que caiu 50% ou mais nas últimas 24h'
	},
	whale_trade: {
		name: 'Operação de Baleia',
		description: 'Faça uma única negociação no valor de $100.000+'
	},
	hold_10_coins: {
		name: 'Diversificado',
		description: 'Mantenha 10 moedas diferentes ao mesmo tempo'
	},
	hold_25_coins: {
		name: 'Fundo de Índice',
		description: 'Mantenha 25 moedas diferentes ao mesmo tempo'
	},
	yolo: {
		name: 'YOLO',
		description: 'Gaste $50.000+ em uma única negociação'
	},
	volume_10m: {
		name: 'Rei do Volume',
		description: 'Acumule $10.000.000 em volume total de negociações'
	},
	diamond_hands: {
		name: 'Mãos de Diamante',
		description: 'Segure uma única moeda por 30 dias ou mais'
	},
	true_dedication: {
		name: 'Dedicação Real',
		description: 'Invista $1.000+ em uma moeda por 14 dias seguidos sem vender'
	},
	portfolio_1k: {
		name: 'Primeira Vírgula',
		description: 'Atinja $1.000 de valor total do portfólio'
	},
	portfolio_100k: {
		name: 'Seis Algarismos',
		description: 'Atinja $100.000 de valor total do portfólio'
	},
	portfolio_1m: {
		name: 'Milionário',
		description: 'Atinja $1.000.000 de valor total do portfólio'
	},
	portfolio_1b: {
		name: 'Bilionário',
		description: 'Atinja $1.000.000.000 de valor total do portfólio'
	},
	broke: {
		name: 'Quebrado',
		description: 'Tenha menos de $1 na sua conta'
	},
	create_coin: {
		name: 'Minerador',
		description: 'Crie sua primeira moeda'
	},
	create_5: {
		name: 'Minerador em Série',
		description: 'Crie 5 moedas'
	},
	create_25: {
		name: 'Fábrica de Moedas',
		description: 'Crie 25 moedas'
	},
	moon_100x: {
		name: 'Até a Lua',
		description: 'Faça uma moeda que você criou atingir $1 (1.000.000x do preço inicial)'
	},
	rug_pull: {
		name: 'Senhor do Rug Pull',
		description: 'Despenque o preço de uma moeda em 50% ou mais em uma única venda'
	},
	first_arcade: {
		name: 'Sentindo Sorte',
		description: 'Jogue seu primeiro jogo de arcade'
	},
	slots_jackpot: {
		name: 'Jackpot!',
		description: 'Acertar um trio no caça-níquel'
	},
	mines_15: {
		name: 'Minesweeper Pro',
		description: 'Revele 15 ou mais casas seguras em uma única partida de mines e saque'
	},
	mines_24: {
		name: 'Deus do Minesweeper',
		description: 'Vença com 24 minas ativadas'
	},
	mines_21: {
		name: 'Nuvem 9',
		description: 'Revele todas as 22 casas seguras com 3 minas e saque'
	},
	tower_god: {
		name: 'Deus da Torre',
		description: 'Chegue ao andar 10 no modo difícil e saque (aposta mínima de $10)'
	},
	blackjack_21: {
		name: 'Exatamente 21',
		description: 'Vença o blackjack chegando a 21'
	},
	arcade_100: {
		name: 'Degen',
		description: 'Jogue 100 jogos de arcade'
	},
	arcade_wager_100k: {
		name: 'Apostador de Alto Nível',
		description: 'Aposte $100.000 ou mais no total em jogos de arcade'
	},
	arcade_losses_50k: {
		name: 'A Casa Sempre Vence',
		description: 'Perda $50.000 ou mais no total no arcade'
	},
	win_streak_5: {
		name: 'Sequência de Sorte',
		description: 'Vença 5 jogos de arcade em sequência'
	},
	arcade_wins_500k: {
		name: 'Jogador Profissional',
		description: 'Ganhe $500.000 ou mais no total no arcade'
	},
	arcade_wins_1m: {
		name: 'Só Vencer',
		description: 'Faça $1.000.000 em ganhos com jogos de arcade'
	},
	risk_biscuit: {
		name: 'Arrisque pelo biscoito',
		description: 'Vá all-in com pelo menos $25.000 e vença'
	},
	arcade_losses_1m: {
		name: 'Só Perder',
		description: 'Perda $1.000.000 em jogos de arcade'
	},
	first_claim: {
		name: 'Madrugador',
		description: 'Resgate sua primeira recompensa diária'
	},
	streak_7: {
		name: 'Dedicado',
		description: 'Alcance uma sequência de login de 7 dias'
	},
	streak_14: {
		name: 'Comprometido',
		description: 'Alcance uma sequência de login de 14 dias'
	},
	streak_30: {
		name: 'Obcecado',
		description: 'Alcance uma sequência de login de 30 dias'
	},
	rewards_100k: {
		name: 'Colecionador de Recompensas',
		description: 'Resgate $100.000 no total em recompensas diárias'
	},
	prestige_1: {
		name: 'Botão de Reset',
		description: 'Faça prestige pela primeira vez'
	},
	prestige_3: {
		name: 'Modo Trampo',
		description: 'Alcance Prestige III'
	},
	prestige_5: {
		name: 'Ascendido',
		description: 'Alcance Prestige V'
	},
	prestige_7: {
		name: 'Ascendido',
		description: 'Alcance Prestige VII (prestígio máximo)'
	},
	first_bet: {
		name: 'Bola de Cristal',
		description: 'Faça sua primeira aposta no Hopium'
	},
	create_10_questions: {
		name: 'Mestre das Perguntas',
		description: 'Crie 10 perguntas de Hopium'
	},
	win_10_bets: {
		name: 'Oráculo',
		description: 'Vença 10 apostas de Hopium'
	},
	win_50_bets: {
		name: 'Profeta',
		description: 'Vença 50 apostas de Hopium'
	},
	comments_25: {
		name: 'Socialite',
		description: 'Publique 25 comentários nas páginas de moedas'
	},
	comments_50: {
		name: 'Tagarela',
		description: 'Escreva 50 comentários no total'
	},
	top_rugpuller: {
		name: 'Maior Rugpuller',
		description: 'Seja o #1 em rugpulling no placar diário'
	},
	transfers_10_users: {
		name: 'Generoso',
		description: 'Envie transferências para 10 usuários diferentes'
	},
	transfer_500k: {
		name: 'Gorjeta Gigante',
		description: 'Transfira $500.000 ou mais no total para outros usuários'
	},
	received_from_15: {
		name: 'Uma celebridade?',
		description: 'Receba dinheiro de 15 pessoas diferentes'
	},
	update_bio: {
		name: 'Quem é você?',
		description: 'Atualize sua seção Sobre mim'
	},
	own_5_colors: {
		name: 'Colecionador',
		description: 'Tenha 5 cores diferentes de nome'
	},
	own_10_colors: {
		name: 'Colecionador Viciado',
		description: 'Tenha 10 cores diferentes de nome'
	},
	own_15_colors: {
		name: 'Colecionador Super Viciado',
		description: 'Tenha 15 cores diferentes de nome'
	},
	open_50_crates: {
		name: 'Viciado em Caixas',
		description: 'Abra 50 caixas'
	},
	all_in: {
		name: 'Tudo ou Nada',
		description: 'Gaste 95% ou mais do seu saldo em uma única negociação'
	},
	account_6mo: {
		name: 'Veterano',
		description: 'Tenha uma conta com mais de 6 meses'
	}
} satisfies Record<string, { name: string; description: string }>;

export default {
	lang: {
		code: 'pt',
		name: 'Português',
		flagCode: 'br'
	},
	global: {
		price: 'Preço',
		name: 'Nome',
		reset: 'Resetar',
		apply: 'Aplicar',
		coin: 'Moeda',
		max: 'Máx.',
		cancel: 'Cancelar',
		try_again: 'Tente Novamente',
		type: 'Tipo',
		sender: 'Remetente',
		receiver: 'Destinatário',
		unknown: 'Desconhecido',
		quantity: 'Quantidade',
		amount: 'Quantia',
		date: 'Data',
		note: 'Anotação',
		value: 'Valor',
		live: '● AO VIVO'
	},
	greetings: {
		good_morning: 'Bom Dia, {{name}}!',
		good_afternoon: 'Boa Tarde, {{name}}!',
		good_evening: 'Boa Noite, {{name}}!',
		good_night: 'Boa Noite, {{name}}!'
	},
	page_names: {
		home: 'Início',
		market: 'Mercado',
		hopium: 'Hopium',
		arcade: 'Arcade',
		leaderboard: 'Placar de Líderes',
		shop: 'Loja',
		achievements: 'Conquistas',
		groups: 'Grupos',
		portfolio: 'Portfólio',
		treemap: 'Treemap',
		create_coin: 'Criar Moeda',
		notifications: 'Notificações',
		about: 'Sobre',
		lottery: 'Loteria',
		live_trades: 'Negociações ao vivo',
		settings: 'Configurações',
		admin: {
			main: 'Admin',
			promo: 'Promo Codes'
		}
	},
	main: {
		title: 'Bem vindo(a) ao BooPlay!',
		description: 'Aqui está um panorama do mercado para hoje.',
		market_overview: 'Visão Geral do Mercado'
	},
	achievements: {
		title: 'Conquistas',
		seo_description:
			'Acompanhe seu progresso e desbloqueie conquistas no simulador de trading cripto BooPlay. Complete desafios para ganhar recompensas.',
		seo_keywords: 'conquistas de jogo cripto, desafios de simulador de trading, recompensas virtuais de trading',
		loading: 'Carregando...',
		claimed_summary: '{{claimed}} / {{total}} conquistadas',
		claim_all: 'Resgatar todas ({{count}})',
		claiming_all: 'Resgatando...',
		claim: 'Resgatar',
		claiming: 'Resgatando...',
		reward_claimed: 'Recompensa resgatada!',
		claimed_all_success: '{{count}} conquistas resgatadas!',
		reward_description: '+{{cash}} em dinheiro, +{{gems}} gemas',
		errors: {
			load: 'Falha ao carregar conquistas',
			claim: 'Falha ao resgatar conquista',
			claim_all: 'Falha ao resgatar conquistas'
		},
		no_category: 'Nenhuma conquista nesta categoria',
		categories: {
			all: 'Todas',
			trading: 'Trading',
			wealth: 'Riqueza',
			creation: 'Criação de Moedas',
			arcade: 'Arcade',
			streaks: 'Recompensas Diárias e Sequências',
			prestige: 'Prestígio',
			hopium: 'Hopium',
			social: 'Social',
			shop: 'Loja e Cosméticos',
			special: 'Especial'
		},
		difficulties: {
			easy: 'Fácil',
			medium: 'Médio',
			hard: 'Difícil',
			legendary: 'Lendário'
		},
		items: achievementItems
	},
	lottery: {
		title: 'Loteria',
		description:
			'Sorteio diário — 90% para o vencedor, 10% para o banco. A chance de ganhar cresce com o prêmio (50% em $1M).',
		seo_description: 'Jogue a loteria diária no Booplay. Ganhe até 90% do prêmio. $500 por ticket.',
		loading: 'Carregando loteria...',
		active_title: 'Loteria ativa',
		active_subtitle: 'Sorteio atual. Veja abaixo como funciona a escala e a validade dos tickets.',
		current_draw: 'SORTEIO ATUAL',
		prize_pool: 'Prêmio total',
		winner_share: 'Vencedor (90%)',
		bank_share: 'Banco (10%)',
		draw_at: 'Sorteio em',
		how_it_works: 'Como funciona',
		how_chance_title: 'A chance de ganhar cresce com o prêmio',
		how_chance_body:
			'Em $0, a chance de escolher um vencedor é 0,1%. Ela cresce linearmente até 50% quando o prêmio atinge $1M. Com o prêmio atual de {{pool}}, a chance do sorteio de hoje é {{chance}}%. Se ninguém ganhar, o prêmio acumula para o próximo dia.',
		how_tickets_title: 'Os tickets valem apenas para um sorteio',
		how_tickets_body:
			'Cada ticket vale somente para o sorteio daquele dia. Se ninguém ganhar, o prêmio acumula — mas seus tickets não. Você precisa comprar novos tickets para o próximo sorteio.',
		breakdown_title: 'Distribuição do prêmio',
		breakdown_tickets: 'Receita dos tickets',
		breakdown_bank: 'Contribuição do banco (20% do lucro)',
		breakdown_donations: 'Doações',
		breakdown_rollover: 'Acúmulo do sorteio anterior',
		odds_title: 'Tickets e chances',
		odds_tickets_sold: 'Tickets vendidos',
		odds_draw_chance: 'Chance de sair um vencedor',
		odds_per_ticket: 'Sua chance por ticket',
		odds_your_tickets: 'Seus tickets (este sorteio)',
		odds_combined: 'Sua chance total de ganhar',
		purchase_title: 'Comprar tickets',
		purchase_subtitle:
			'{{price}} por ticket. Os tickets valem apenas para este sorteio — se o prêmio acumular, compre novamente para o próximo.',
		number_of_tickets: 'Número de tickets',
		each: 'cada',
		total: 'Total',
		purchase_button: 'Comprar tickets',
		purchasing: 'Comprando...',
		sign_in_to_purchase: 'Entre para comprar tickets da loteria.',
		history_title: 'Lotarias anteriores',
		history_subtitle:
			'Sorteios concluídos e acumulações. Os vencedores aparecem no feed de notícias.',
		history_date: 'Data',
		history_pool: 'Prêmio total',
		history_tickets: 'Tickets vendidos',
		history_status: 'Status',
		history_winner: 'Vencedor',
		history_prize: 'Prêmio',
		no_history: 'Nenhum sorteio concluído ainda.',
		status_won: 'Ganhou',
		status_rollover: 'Acumulou',
		invalid_quantity: 'Digite uma quantidade válida entre 1 e 1000.',
		purchase_failed: 'Falha ao comprar os tickets.',
		purchased: 'Compra realizada com sucesso de {{n}} ticket(s)!',

		tabs: {
			daily: 'Diário',
			weekly: 'Semanal',
			news: 'Notícias'
		},

		weekly: {
			title: 'Loteria semanal',
			description: 'Escolha 6 números de 1 a 60. Sorteios todo domingo.',
			prize_pool: 'Prêmio total semanal',
			how_title: 'Faixas de prêmio',
			jackpot: 'Jackpot (todos os 6 números)',
			match5: '2º prêmio (5 de 6)',
			match4: '3º prêmio (4 de 6)',
			jackpot_pct: '50% do prêmio total',
			match5_pct: '30% do prêmio total',
			match4_pct: '20% do prêmio total',
			note: '10% abastece o prêmio da próxima semana. Prêmios não reclamados acumulam.',
			pick_numbers_title: 'Escolha seus números',
			numbers_picked: '{{n}}/{{total}} selecionados',
			pick_exactly: 'Escolha exatamente {{n}} números',
			clear: 'Limpar',
			buy_ticket: 'Comprar ticket',
			random_tickets: 'Comprar tickets aleatórios',
			buy_random: 'Comprar aleatórios',
			ticket_bought: 'Ticket(s) semanal(is) comprado(s)!',
			your_tickets_title: 'Seus tickets deste sorteio',
			match_count: 'acertos',
			pick_at_least: 'Escolha pelo menos {{n}} números',
			combinations: 'Combinações',
			history_title: 'Sorteios semanais anteriores',
			drawn_numbers: 'Números sorteados',
			jackpot_winners: 'Jackpot',
			match5_winners: '5 de 6',
			match4_winners: '4 de 6',
			no_history: 'Ainda não houve sorteios semanais'
		},

		news: {
			title: 'Notícias da loteria',
			subtitle: 'Histórico de todos os sorteios diários e semanais',
			daily: 'Diário',
			weekly: 'Semanal',
			no_data: 'Ainda não há histórico da loteria'
		},

		donate: {
			title: 'Doar para o prêmio',
			subtitle: 'Sua doação vai direto para o prêmio diário ativo',
			button: 'Doar',
			donating: 'Doando...',
			success: 'Doação de {{amount}} para o prêmio realizada com sucesso!',
			placeholder: 'Valor...'
		}
	},
	coin: {
		'24hchange': 'Mudança em 24h',
		marketcap: 'Capitalização de Mercado',
		volume24h: 'Volume (24h)',
		delisted: 'Deslistado',
		createdBy: 'Criado por',
		priceChart: [
			'Gráfico de Preços ({{time}})',
			'1 minuto',
			'5 minutos',
			'15 minutos',
			'1 hora',
			'4 horas',
			'1 dia',
			'Nenhum dado de troca disponível'
		],
		trade: {
			title: 'Negocie {{symbol}}',
			youOwn: 'Você tem: {{shares}} {{symbol}}',
			lock: [
				'🔒 Período exclusivo para o criador: {{time}} restantes',
				'🔒 Negociação desbloqueia em: {{time}}'
			],
			buy: {
				title: 'Comprar {{symbol}}',
				current: 'Preço atual: ${{price}} por {{symbol}}',
				amountSpend: ['Quantidade para gastar ($)', 'Saldo: {{balance}}'],
				buy: 'Compre {{symbol}}'
			},
			sell: {
				title: 'Vender {{symbol}}'
			},
			burn: {
				title: 'Queimar Tokens de {{symbol}}'
			}
		},
		pool: {
			title: 'Composição do Pool',
			baseCurrency: 'Moeda Base:',
			burnedCoins: 'Moedas Queimadas:',
			stats: {
				liquity: 'Liquidez Total:',
				currentPrice: 'Preço Atual:'
			}
		},
		topHolders: {
			title: 'Maiores Acionistas'
		}
	},
	sign_in: {
		message: ['Você precisa', 'fazer login', 'para jogar.'],
		form: {
			title: 'Faça login em BooPlay',
			description:
				'Escolha um serviço para logar com. Sua conta será criada imediatamente se não tiver uma.',
			services: {
				discord: 'Continuar com Discord'
			},
			terms: [
				'Ao continuar, você concorda com nossos',
				'Termos de Serviço',
				'e',
				'Políticas de Privacidade'
			]
		},
		portfolio: ['Você precisa estar logado para ver seu portfólio', 'Fazer Login'],
		sign_in: 'Fazer Login',
		trade: 'Você precisa estar logado para negociar.'
	},
	leaderboard: {
		title: 'Placar de Líderes',
		description: 'Maiores desempenhos e atividade de mercado',
		no_data: 'Sem Dados',
		failed: {
			title: 'Ocorreu um erro ao carregar o Placar de Líderes',
			try_again: 'Tentar Novamente'
		},
		rugpullers: {
			title: 'Maiores Rugpullers (24h)',
			description: 'Usuários que mais lucraram vendendo moedas hoje',
			no_data: 'Nenhum lucro significativo registrado hoje'
		},
		losers: {
			title: 'Maiores Perdas (24h)',
			description: 'Usuários que mais perderam dinheiro hoje',
			no_data: 'Nenhuma perda significativa registrada hoje'
		},
		top_cash: {
			title: 'Maiores Detentores de Dinheiro',
			description: 'Usuários com maior saldo de dinheiro líquido',
			no_data: 'Todos Investiram! 💸'
		},
		portfolio: {
			title: 'Maiores Valores de Portfólios',
			description: 'Usuários com os maiores valores de portfólio (incluindo não líquido)',
			no_data: 'Ainda sem grandes portfólios! 📉'
		}
	},
	market: {
		title: 'Mercado',
		description: 'Descubra Moedas, Acompanhe seu desempenho, e encontre seu próximo investimento',
		showing: 'Mostrando {{startIndex}}-{{endIndex}} de {{totalCount}} moedas',
		search: {
			placeholder: 'Pesquisar moedas pelo nome ou símbolo...',
			filters: {
				title: 'Filtros',
				sort_by: 'Sortear por',
				change24h: 'Mudança (24h)',
				price: 'Preço',
				marketcap: 'Capitalização',
				volume24h: 'Volume (24h)',
				clear: 'Limpar todos os filtros',
				sort_order: {
					title: 'Ordem de Sorteio',
					high_low: 'Alto para Baixo',
					low_high: 'Baixo para Alto'
				},
				price_range: {
					title: 'Faixa de Preço',
					all_prices: 'Todos os Preços',
					under1: 'Menos de $1',
					'1-10': '$1 - $10',
					'10-100': '$10 - $100',
					over100: 'Acima de $100'
				},
				'24h_change': {
					title: 'Mudança em 24h',
					all: 'Todas as Mudanças',
					gainers: 'Apenas os Ganhadores',
					losers: 'Apenas os Perdedores',
					hot: 'Quente (10%)',
					wild: 'Selvagem (50%)'
				}
			}
		}
	},
	portfolio: {
		title: 'Portfólio',
		description: 'Gerencie seus investimentos e transações',
		cash_balance: ['Saldo em Dinheiro', '{{percent}}% do portfólio'],
		coin_holdings: ['Participações em Moedas', '{{quantity}} posições'],
		your_holdings: ['Suas Ações', 'As ações em seu portfólio'],
		recent_transactions: ['Transações Recentes', 'Suas últimas atividades de troca', 'Ver todas'],
		total: 'Total',
		no_coins: [
			'Sem Participações de Moedas',
			'Você não tem participação de nenhuma moeda ainda. Começe comprando moedas existentes.',
			'Pesquisar Moedas'
		],
		send_money: {
			title: 'Enviar Dinheiro',
			send: ['Enviar', 'Enviando...'],
			description: 'Envie dinheiro ou moedas para outro usuário',
			recipient: ['Destinatário', 'Digite o username (sem o @)'],
			type: ['Tipo', 'Dinheiro ($)', 'Moedas', 'Selecione o tipo de transferência'],
			cash: [
				'Quantidade ($)',
				'Disponível: ${{balance}}',
				'Mínimo: $10.00 por transferência',
				'Transferências de dinheiro precisam ser de pelo menos $10.00',
				'Fundos insuficientes',
				'Dinheiro enviado com sucesso!',
				'Enviado ${{amount}} para @{{recipent}}'
			],
			coins: [
				'Selecione a Moeda',
				'Quantidade {{coinSymbol}}',
				'Disponível: {{shares}}',
				'Valor mínimo estimado: $10.00 por transferência',
				'Transferências de moedas precisam de um valor estimado de pelo menos $10.00',
				'Moedas não suficientes',
				'Moedas enviadas com sucesso!',
				'Enviou {{amount}} {{symbol}} (≈${{estimated}}) para @${{recipent}}'
			],
			note: [
				'Anotação',
				'(Opcional)',
				'Adicione uma nota de referência para essa transferência...'
			],
			youre_sending: ['Você está mandando:', '{{amount}} USD', 'Para:']
		},
		no_transactions: [
			'Sem transações ainda',
			'Você não fez nenhuma troca ainda. Começe comprando ou vendendo moedas.'
		]
	},
	groups: {
		title: 'Grupos',
		description: 'Entre em comunidades e gerencie um tesouro compartilhado',
		create: {
			button: 'Criar Grupo',
			title: 'Criar um Grupo',
			description: 'Custa ${{cost}} para criar um grupo. Você pode criar até {{max}} grupos.',
			name_label: 'Nome',
			name_placeholder: 'Meu Grupo Incrível',
			name_hint: 'Letras, números, espaços, hífens, sublinhados',
			desc_label: 'Descrição',
			desc_placeholder: 'Sobre o que é este grupo?',
			public_label: 'Grupo Público',
			public_hint: 'Qualquer pessoa pode entrar sem aprovação',
			submit: 'Criar (${{cost}})',
			creating: 'Criando...',
			success: 'Grupo criado!',
			errors: {
				name_required: 'Nome obrigatório',
				failed: 'Falha ao criar grupo'
			}
		},
		my_groups: 'Meus Grupos',
		browse: 'Explorar Grupos',
		no_groups: 'Nenhum grupo encontrado',
		members_count: '{{count}} membros',
		treasury: 'Tesouro: {{value}}',
		search_placeholder: 'Pesquisar grupos...',
		visibility: {
			public: 'Público',
			private: 'Privado'
		},
		roles: {
			owner: 'dono',
			admin: 'admin',
			member: 'membro'
		},
		detail: {
			back: 'Voltar para Grupos',
			tabs: {
				wall: 'Mural',
				members: 'Membros',
				treasury: 'Tesouro',
				requests: 'Solicitações'
			},
			join: 'Entrar',
			request_join: 'Solicitar Entrada',
			leave: 'Sair',
			settings: 'Configurações',
			delete: 'Excluir',
			joined: 'Entrou no grupo!',
			request_sent: 'Solicitação de entrada enviada!',
			left: 'Saiu do grupo',
			settings_saved: 'Configurações salvas',
			deleted: 'Grupo excluído',
			settings_dialog: {
				title: 'Configurações do Grupo',
				desc_label: 'Descrição',
				public_label: 'Grupo Público',
				public_hint: 'Qualquer pessoa pode entrar sem aprovação',
				save: 'Salvar',
				saving: 'Salvando...'
			},
			delete_dialog: {
				title: 'Excluir Grupo',
				description: 'Esta ação é permanente. Os fundos do tesouro serão devolvidos a você.',
				confirm: 'Excluir',
				deleting: 'Excluindo...'
			},
			wall: {
				placeholder: 'Poste algo no mural...',
				post: 'Publicar',
				posting: 'Publicando...',
				empty: 'Nenhuma publicação ainda',
				deleted: 'Publicação removida'
			},
			members: {
				promote: 'Promover',
				demote: 'Rebaixar',
				kick: 'Expulsar',
				kick_success: 'Membro expulso',
				role_updated: 'Cargo atualizado'
			},
			treasury: {
				title: 'Tesouro',
				balance: 'Saldo',
				deposit: 'Depositar',
				withdraw: 'Sacar',
				processing: 'Processando...',
				deposited: 'Depositado {{value}}',
				withdrew: 'Sacado {{value}}',
				amount_placeholder: 'Quantia',
				note_placeholder: 'Anotação (opcional)',
				no_transactions: 'Nenhuma transação ainda',
				recent: 'Transações Recentes'
			},
			requests: {
				empty: 'Nenhuma solicitação de entrada pendente',
				accept: 'Aceitar',
				deny: 'Recusar',
				accepted: 'Solicitação aceita',
				denied: 'Solicitação recusada'
			}
		}
	},
	settings: {
		title: 'Configurações',
		seo_description:
			'Gerenciar as configurações da sua conta Booplay, informações de perfil, preferências de áudio e opções de privacidade.',
		seo_keywords:
			'configurações de conta de jogo, configurações de perfil de jogo, configurações de privacidade, configurações de áudio de jogo',
		not_logged_in: 'Você precisa estar conectado para visualizar suas configurações',
		sign_in_button: 'Fazer Login',
		profile_settings: {
			title: 'Configurações de Perfil',
			description: 'Atualize suas informações de perfil',
			display_name_label: 'Nome de Exibição',
			display_name_required: 'Nome de exibição é obrigatório.',
			display_name_min: 'Nome de exibição deve ter pelo menos 2 caracteres.',
			display_name_max: 'Nome de exibição deve ter no máximo 50 caracteres.',
			username_label: 'Usuário',
			username_hint: 'Apenas letras, números e sublinhados. 3–30 caracteres.',
			username_checking: 'Verificando…',
			username_taken: 'Já Utilizado',
			bio_label: 'Bio',
			bio_placeholder: 'Conte-nos sobre você',
			timezone_label: 'Fuso Horário',
			avatar_change_text: 'Alterar',
			save_changes_button: 'Salvar Alterações',
			saving_button: 'Salvando…',
			success_message: 'Configurações atualizadas com sucesso!',
			success_refresh: 'Atualizar',
			error_message: 'Falha ao atualizar configurações',
			unexpected_error: 'Ocorreu um erro inesperado',
			profile_picture_large: 'Foto de perfil deve ser menor que 1MB',
			invalid_image: 'Selecione um arquivo de imagem válido'
		},
		audio_settings: {
			title: 'Configurações de Áudio',
			description: 'Ajuste o volume dos sons do jogo',
			volume_label: 'Volume',
			volume_hint: 'Controla todos os sons do jogo, incluindo efeitos e áudio de fundo'
		},
		notification_settings: {
			title: 'Configurações de Notificações',
			description: 'Controle como você recebe notificações',
			mentions_title: 'Menções',
			mentions_description: 'Receba notificações quando alguém o @mencionar nos comentários'
		},
		blocked_users: {
			title: 'Usuários Bloqueados',
			description:
				'Usuários que você bloqueou não aparecerão em comentários e não poderão enviar notificações',
			loading: 'Carregando...',
			no_blocked: 'Você não bloqueou ninguém.',
			unblock_button: 'Desbloquear',
			unblocking_button: 'Desbloqueando...',
			unblock_success: 'Desbloqueado @{{username}}',
			unblock_failed: 'Falha ao desbloquear usuário',
			load_failed: 'Falha ao carregar usuários bloqueados'
		},
		data_privacy: {
			title: 'Dados e Privacidade',
			description: 'Gerenciar seus dados pessoais e conta',
			download_title: 'Baixar Seus Dados',
			download_description:
				'Exporte uma cópia completa dos dados da sua conta, incluindo transações, apostas e informações de perfil.',
			download_button: 'Baixar Dados',
			downloading_button: 'Baixando...',
			download_started: 'Seu download de dados começou',
			download_size_confirm:
				'Sua exportação de dados é {{size}}MB. Isso pode levar um tempo para baixar. Continuar?',
			download_failed: 'Falha ao iniciar download de dados: {{error}}',
			delete_title: 'Deletar Conta',
			delete_description:
				'Agendar sua conta para exclusão permanente. Isso anonimizará seus dados enquanto preserva registros de transações para conformidade.',
			delete_button: 'Deletar Conta',
			delete_modal_title: 'Deletar Conta',
			delete_modal_description:
				'Esta ação não pode ser desfeita. Sua conta será agendada para exclusão permanente, após um período de carência de {{days}} dias. Seus dados serão anonimizados.',
			delete_what_happens: 'O que acontece quando você deleta sua conta:',
			delete_list_profile: '• Suas informações de perfil serão removidas permanentemente',
			delete_list_logout: '• Você será desconectado de todos os dispositivos',
			delete_list_anonymize: '• Seus comentários serão anonimizados',
			delete_list_transactions:
				'• Histórico de transações será preservado para conformidade (anonimizado)',
			delete_list_recovery: '• Você não poderá recuperar esta conta',
			delete_confirmation_label: 'Digite "DELETAR MINHA CONTA" para confirmar:',
			delete_confirmation_placeholder: 'DELETAR MINHA CONTA',
			delete_cancel_button: 'Cancelar',
			delete_confirm_button: 'Deletar Conta',
			deleting_button: 'Deletando...',
			delete_confirm_type_error: 'Digite "DELETAR MINHA CONTA" para confirmar',
			delete_scheduled: 'Exclusão da conta agendada com sucesso',
			delete_already_scheduled: 'Exclusão da conta já agendada',
			delete_already_scheduled_desc:
				'Você já solicitou a exclusão da conta. Entre em contato com o suporte para cancelar.',
			delete_failed: 'Falha ao deletar conta: {{error}}'
		}
	}
} satisfies typeof en;
