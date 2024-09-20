import { WormholeConnectConfig } from "@wormhole-foundation/wormhole-connect";

const config: WormholeConnectConfig = {
    network: "mainnet",
    chains: ["solana", "osmosis"],
    rpcs: {
        solana: process.env.REACT_APP_SOLANA_RPC,
        osmosis: "https://rpc.osmosis.zone:443",
        wormchain: "https://wormchain-rpc.polkachu.com/",
    },

    tokens: ["PBJ", "SOL", "WSOL", "UWU"],
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
        UWU: {
            key: "UWU",
            symbol: "UWU",
            nativeChain: "solana",
            tokenId: {
                chain: "solana",
                address: "UwU8RVXB69Y6Dcju6cN2Qef6fykkq6UUNpB15rZku6Z",
            },
            coinGeckoId: "unicorn-3",
            icon: "https://i.degencdn.com/ipfs/bafkreibivgcck3ig7bo4edrykpmsds2a7424oys2ldyj2vief6b5nayq7q",
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
