import { http, createConfig } from 'wagmi'
import { mainnet, sepolia, foundry } from 'wagmi/chains'
import { injected } from 'wagmi/connectors'

export const config = createConfig({
  chains: [
    mainnet, 
    sepolia,     
    foundry],
  connectors: [
    injected()    
  ],
  ssr: true,
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),    
    [foundry.id]: http()
  },
})

declare module 'wagmi' {
  interface Register {
    config: typeof config
  }
}