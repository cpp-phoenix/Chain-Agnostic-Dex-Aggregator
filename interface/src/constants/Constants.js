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
      id: 42_161,
      name: 'Arbitrum',
      network: 'arbitrum',
      nativeCurrency: {
        decimals: 18,
        name: 'Arbitrum',
        symbol: 'ETH',
      },
      rpcUrls: {
        default: 'https://arbitrum-mainnet.infura.io',
      },
      blockExplorers: {
        default: { name: 'ArbitrumScan', url: 'https://explorer.arbitrum.io' },
      },
      testnet: false,
    },
    {
        id: 56,
        name: 'Binance',
        network: 'bnb',
        nativeCurrency: {
          decimals: 18,
          name: 'Binance',
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
          default: 'https://rpc.flashbots.net/',
        },
        blockExplorers: {
          default: { name: 'EtherScan', url: 'https://etherscan.io' },
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
  {
    id: 5,
    name: 'Goeri',
    network: 'ETH',
    nativeCurrency: {
      decimals: 18,
      name: 'Eth',
      symbol: 'ETH',
    },
    rpcUrls: {
      default: 'https://goerli.infura.io/v3/',
    },
    blockExplorers: {
      default: { name: 'EtherScan', url: 'https://goerli.etherscan.io' },
    },
    testnet: true,
  },
  {
    id: 80_001,
    name: 'Mumbai',
    network: 'Matic',
    nativeCurrency: {
      decimals: 18,
      name: 'Matic',
      symbol: 'MATIC',
    },
    rpcUrls: {
      default: 'https://matic-mumbai.chainstacklabs.com',
    },
    blockExplorers: {
      default: { name: 'PolygonScan', url: 'https://mumbai.polygonscan.com' },
    },
    testnet: true,
  }
]

export const tokensList = {
  "Avalance": [
    {
      token: "AVAX",
      address: "",
      decimals: 18
    },
    {
      token: "USDC",
      address: "0xb97ef9ef8734c71904d8002f8b6bc66dd9c48a6e",
      decimals: 6
    }
  ],
  "Arbitrum": [
    {
      token: "ETH",
      address: "",
      decimals: 18
    },
    {
      token: "USDC",
      address: "0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8",
      decimals: 6
    }
  ],
  "Binance": [
    {
      token: "BNB",
      address: "",
      decimals: 18
    },
    {
      token: "USDC",
      address: "0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d",
      decimals: 6
    }
  ],
  "Celo":[
    {
      token: "CELO",
      address: "",
      decimals: 18
    },
    {
      token: "cUSD",
      address: "0x765DE816845861e75A25fCA122bb6898B8B1282a",
      decimals: 6
    }
  ],
  "Ethereum":[
    {
      token: "ETH",
      address: "",
      decimals: 18
    },
    {
      token: "USDC",
      address: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
      decimals: 6
    },
    {
      token: "SAND",
      address: "0x3845badAde8e6dFF049820680d1F14bD3903a5d0",
      decimals: 18
    }
  ],
  "Fantom":[
    {
      token: "FTM",
      address: "",
      decimals: 18
    },
    {
      token: "USDC",
      address: "0x04068da6c83afcfa0e13ba15a6696662335d5b75",
      decimals: 6
    }
  ],
  "Optimism":[
    {
      token: "ETH",
      address: "",
      decimals: 18
    },
    {
      token: "USDC",
      address: "0x7f5c764cbc14f9669b88837ca1490cca17c31607",
      decimals: 6
    }
  ],
  "Polygon":[
    {
      token: "MATIC",
      address: "",
      decimals: 18
    },
    {
      token: "USDC",
      address: "0x2791bca1f2de4661ed88a30c99a7a9449aa84174",
      decimals: 6
    }
  ]
}

export const zeroXMainnet = {
  "Avalance": "https://arbitrum.api.0x.org/",
  "Arbitrum": "https://arbitrum.api.0x.org/",
  "Binance": "https://bsc.api.0x.org/",
  "Celo": "https://celo.api.0x.org/",
  "Ethereum": "https://api.0x.org/",
  "Fantom": "https://fantom.api.0x.org/",
  "Optimism": "https://optimism.api.0x.org/",
  "Polygon": "https://polygon.api.0x.org/"
}

export const zeroXTestnet = {
  "Ethereum": "https://goerli.api.0x.org/",
  "Polygon": "https://mumbai.api.0x.org/"
}