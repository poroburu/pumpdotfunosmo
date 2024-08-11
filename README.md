# pumpfunosmo

`pumpfunosmo` uses [Wormhole Connect](https://wormhole.com/products/connect) to bridge `pump.fun` tokens from Solana to Osmosis via [Wormhole Gateway](https://wormhole.com/platform/gateway).

`pumpfunosmo` is a proof of concept for permissionlessly bridging low liquidity tokens to Cosmos.

## motivation

[Portal Bridge](https://portalbridge.com), a frontend for Wormhole Connect, only whitelists liquid markets on their frontend bridge react component.

📄 https://portalbridge.com/docs/faqs/liquid-markets

Configuring and self-deploying Wormhole Connect allows any non-cosmos token to be bridged using Wormhole Connect over Wormhole Gateway.

## `pumpdotfun` project status

✅ Bridging and redemption for any Solana token works both ways `SOL => OSMO && OSMO => SOL`

⚠️ Attestation only works for non-cosmos tokens. 

😼 Poro is interested in researching how to attest Cosmos tokens with Wormhole Gateway.
## configure
⚙️ Token configuration [config.ts](./src/config/config.ts)

🎨 Theme configuration [theme.ts](./src/theme/theme.ts)

## attestation 
📝 https://portalbridge.com/docs/tutorials/how-to-do-token-register

## build
🔧 Create React App build instructions [build.md](./build.md).

`pumpfunosmo` was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


