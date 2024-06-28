import { WormholeConnectConfig } from "@wormhole-foundation/wormhole-connect";

const config: WormholeConnectConfig = {
    network: "mainnet",
    chains: ["solana", "osmosis"],
    rpcs: {
        solana: "https://solana-mainnet.core.chainstack.com/b6cc78ce81eaaaf59554e341f60bb6b3",
        osmosis: "https://osmosis-rpc.publicnode.com:443",
        wormchain: "https://wormchain-rpc.polkachu.com/",
    },
    tokens: ["SOL", "PTRUMP"],
    tokensConfig: {
        PTRUMP: {
            key: "PTRUMP",
            symbol: "PTRUMP",
            nativeChain: "solana",
            tokenId: {
                chain: "solana",
                address: "Gk2kRrwNMBU4Dn9JhC1Dks8G5X9nqi4ZE5jMvK6bdgEd",
            },
            coinGeckoId: "pepe-trump",
            icon: "https://assets.coingecko.com/coins/images/37560/standard/Icon_2.png?1714872973",
            decimals: {
                default: 6,
            },
            foreignAssets: {
                osmosis: {
                    address:
                        "ibc/B2A43A2B6BD7E5E81F1E67D60C56C0B72EABB31E45DD32BF1E96B124EE75404D",
                    decimals: 5,
                },
            },
        },
    },
    bridgeDefaults: {
        fromNetwork: "solana",
        toNetwork: "osmosis",
        token: "PTRUMP",
    },
};
export default config;
