import {providers} from "ethers";
import {useMemo} from "react";
import {useConnectorClient} from "wagmi";

export function clientToSigner(client) {
    try {
        const {account, chain, transport} = client;
        const network = {
            chainId: chain.id,
            name: chain.name,
            ensAddress: chain.contracts?.ensRegistry?.address,
        };
        const provider = new providers.Web3Provider(transport, network);
        return provider.getSigner(account.address);
    } catch (e) {
        console.error(e);
    }
}

/** Hook to convert a Viem Client to an ethers.js Signer. */
export function useEthersSigner({chainId} = {}) {
    const {data: client} = useConnectorClient({chainId});
    const connectorClient = useConnectorClient();

    if (connectorClient.failureCount > 0) {
        console.log('failureReason', connectorClient.failureReason)
    }
    return useMemo(() => (client ? clientToSigner(client) : undefined), [client]);
}
