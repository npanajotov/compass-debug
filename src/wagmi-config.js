import { http, createConfig } from 'wagmi'
import { sei, seiDevnet } from 'wagmi/chains'

export const config = createConfig({
    chains: [sei, seiDevnet],
    transports: {
        [sei.id]: http(),
        [seiDevnet.id]: http(),
    },
})