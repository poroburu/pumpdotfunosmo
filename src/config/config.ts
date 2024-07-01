import { WormholeConnectConfig } from "@wormhole-foundation/wormhole-connect";

const config: WormholeConnectConfig = {
    network: "mainnet",
    chains: ["solana", "osmosis"],
    rpcs: {
        solana: "https://solana-mainnet.core.chainstack.com/b6cc78ce81eaaaf59554e341f60bb6b3",
        osmosis: "https://rpc.osmosis.zone:443",
        wormchain: "https://wormchain-rpc.polkachu.com/",
    },

    tokens: ["PBJ", "SOL", "WSOL"],
    tokensConfig: {
        PBJ: {
            key: "PBJ",
            symbol: "PBJ",
            nativeChain: "solana",
            tokenId: {
                chain: "solana",
                address: "ANu4Wuq86WzRU8tykszQUJ66eQzFNfkwap2HcQ5UaFaU",
            },
            coinGeckoId: "",
            icon: "https://ipfs.io/ipfs/QmY6bPur4fJTpzbF3FHh7Xq1bpipi2QFGGyk3QKjEtCfQL",
            decimals: {
                default: 6,
            },
        },
    },
    bridgeDefaults: {
        fromNetwork: "solana",
        toNetwork: "osmosis",
        token: "PBJ",
    },
};
export default config;
