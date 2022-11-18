export const chainListMainnet = [
    {
        id: 43_114,
        name: 'Avalanche',
        network: 'avalanche',
        nativeCurrency: {
          decimals: 18,
          name: 'Avalanche',
          symbol: 'AVAX',
        },
        rpcUrls: {
          default: 'https://api.avax.network/ext/bc/C/rpc',
        },
        blockExplorers: {
          default: { name: 'SnowTrace', url: 'https://snowtrace.io' },
        },
        testnet: false,
    },
    {
        id: 56,
        name: 'Binance Chain',
        network: 'bnb',
        nativeCurrency: {
          decimals: 18,
          name: 'Binance Chain',
          symbol: 'BNB',
        },
        rpcUrls: {
          default: 'https://bsc-dataseed1.defibit.io',
        },
        blockExplorers: {
          default: { name: 'BscScan', url: 'https://bscscan.com' },
        },
        testnet: false,
    },
    {
        id: 42_220,
        name: 'Celo',
        network: 'CELO',
        nativeCurrency: {
          decimals: 18,
          name: 'Celo',
          symbol: 'CELO',
        },
        rpcUrls: {
          default: 'https://forno.celo.org',
        },
        blockExplorers: {
          default: { name: 'CeloScan', url: 'https://celoscan.io' },
        },
        testnet: false,
    },
    {
        id: 1,
        name: 'Ethereum',
        network: 'ETH',
        nativeCurrency: {
          decimals: 18,
          name: 'Eth',
          symbol: 'ETH',
        },
        rpcUrls: {
          default: 'https://mainnet.infura.io/v3/',
        },
        blockExplorers: {
          default: { name: 'EtherScan', url: 'https://etherscan.io' },
        },
        testnet: false,
    },
    {
        id: 10,
        name: 'Optimism',
        network: 'ETH',
        nativeCurrency: {
          decimals: 18,
          name: 'Eth',
          symbol: 'ETH',
        },
        rpcUrls: {
          default: 'https://mainnet.optimism.io',
        },
        blockExplorers: {
          default: { name: 'OptimisticScan', url: 'https://optimistic.etherscan.io' },
        },
        testnet: false,
    },
    {
        id: 250,
        name: 'Fantom',
        network: 'FTM',
        nativeCurrency: {
          decimals: 18,
          name: 'Ftm',
          symbol: 'FTM',
        },
        rpcUrls: {
          default: 'https://rpc.ftm.tools',
        },
        blockExplorers: {
          default: { name: 'FtmScan', url: 'https://ftmscan.com' },
        },
        testnet: false,
    },
    {
        id: 137,
        name: 'Polygon',
        network: 'MATIC',
        nativeCurrency: {
          decimals: 18,
          name: 'Matic',
          symbol: 'MATIC',
        },
        rpcUrls: {
          default: 'https://polygon-rpc.com',
        },
        blockExplorers: {
          default: { name: 'PolygonScan', url: 'https://polygonscan.com' },
        },
        testnet: false,
    },
]

export const chainListTestnet = [
]