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
  // {
  //   id: 43_113,
  //   name: 'Avalanche',
  //   network: 'avalanche',
  //   nativeCurrency: {
  //     decimals: 18,
  //     name: 'Avalanche',
  //     symbol: 'AVAX',
  //   },
  //   rpcUrls: {
  //     default: 'https://api.avax-test.network/ext/bc/C/rpc',
  //   },
  //   blockExplorers: {
  //     default: { name: 'SnowTrace', url: 'https://testnet.snowtrace.io' },
  //   },
  //   testnet: false,
  // },
  // {
  //     id: 97,
  //     name: 'Binance',
  //     network: 'bnb',
  //     nativeCurrency: {
  //       decimals: 18,
  //       name: 'Binance',
  //       symbol: 'BNB',
  //     },
  //     rpcUrls: {
  //       default: 'https://data-seed-prebsc-1-s1.binance.org:8545',
  //     },
  //     blockExplorers: {
  //       default: { name: 'BscScan', url: 'https://testnet.bscscan.com' },
  //     },
  //     testnet: false,
  // },
  // {
  //     id: 44_787,
  //     name: 'Celo',
  //     network: 'CELO',
  //     nativeCurrency: {
  //       decimals: 18,
  //       name: 'Celo',
  //       symbol: 'CELO',
  //     },
  //     rpcUrls: {
  //       default: 'https://alfajores-forno.celo-testnet.org',
  //     },
  //     blockExplorers: {
  //       default: { name: 'CeloScan', url: 'https://docs.celo.org/' },
  //     },
  //     testnet: false,
  // },
  {
    id: 5,
    name: 'Goerli',
    network: 'ETH',
    nativeCurrency: {
      decimals: 18,
      name: 'Eth',
      symbol: 'ETH',
    },
    rpcUrls: {
      default: 'https://goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
    },
    blockExplorers: {
      default: { name: 'EtherScan', url: 'https://goerli.etherscan.io' },
    },
    testnet: true,
  },
  // {
  //   id: 4_002,
  //   name: 'Fantom',
  //   network: 'FTM',
  //   nativeCurrency: {
  //     decimals: 18,
  //     name: 'Ftm',
  //     symbol: 'FTM',
  //   },
  //   rpcUrls: {
  //     default: 'https://rpc.testnet.fantom.network',
  //   },
  //   blockExplorers: {
  //     default: { name: 'FtmScan', url: 'https://testnet.ftmscan.com' },
  //   },
  //   testnet: false,
  // },
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

export const tokensListMainnet = {
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
    },
    {
      token: "USDT",
      address: "0xde3A24028580884448a5397872046a019649b084",
      decimals: 6
    },
    {
      token: "DAI",
      address: "0xbA7dEebBFC5fA1100Fb055a87773e1E99Cd3507a",
      decimals: 18
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

export const tokensListTestnet = {
  "Avalance": [
    {
      token: "USDC",
      address: "0x913ae7Fe0F078C6860Bf7A0a11d55cc04664390e",
      decimals: 18
    },
    {
      token: "USDT",
      address: "0x82DCEC6aa3c8BFE2C96d40d8805EE0dA15708643",
      decimals: 6
    }
  ],
  "Arbitrum": [
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
  "Goerli":[
    {
      token: "ETH",
      address: "",
      decimals: 18
    },
    {
      token: "USDC",
      address: "0x5FfbaC75EFc9547FBc822166feD19B05Cd5890bb",
      decimals: 18
    },
    {
      token: "USDT",
      address: "0xC51FceEc013cD34aE2e95E6D64E9858F2aC28fFf",
      decimals: 18
    },
    {
      token: "DAI",
      address: "0xE68104D83e647b7c1C15a91a8D8aAD21a51B3B3E",
      decimals: 18
    }
  ],
  "Fantom":[
    {
      token: "USDC",
      address: "0x04068da6c83afcfa0e13ba15a6696662335d5b75",
      decimals: 6
    },
    {
      token: "USDT",
      address: "0x1B27A9dE6a775F98aaA5B90B62a4e2A0B84DbDd9",
      decimals: 6
    },
    {
      token: "DAI",
      address: "0x8D11eC38a3EB5E956B052f67Da8Bdc9bef8Abf3E",
      decimals: 18
    }
  ],
  "Optimism":[
    {
      token: "USDC",
      address: "0x7f5c764cbc14f9669b88837ca1490cca17c31607",
      decimals: 6
    },
    {
      token: "USDT",
      address: "0x94b008aA00579c1307B0EF2c499aD98a8ce58e58",
      decimals: 6
    },
    {
      token: "DAI",
      address: "0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1",
      decimals: 18
    }
  ],
  "Mumbai":[
    {
      token: "MATIC",
      address: "",
      decimals: 18
    },
    {
      token: "USDC",
      address: "0xe6b8a5CF854791412c1f6EFC7CAf629f5Df1c747",
      decimals: 6
    },
    {
      token: "USDT",
      address: "0xA02f6adc7926efeBBd59Fd43A84f4E0c0c91e832",
      decimals: 6
    },
    {
      token: "DAI",
      address: "0xd393b1E02dA9831Ff419e22eA105aAe4c47E1253",
      decimals: 18
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

