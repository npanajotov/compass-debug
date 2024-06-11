import {useAccount, useConnect} from "wagmi";
import Approval from "./Approval.jsx";

// Problem 1: After refresh the page, the wallet is disconnected.
// Problem 2:

function App() {
    const {connect, connectors} = useConnect();
    const {address, status} = useAccount();

    const onConnect = () => {
        const connector = connectors.find((connector) => connector.id === 'io.leapwallet.CompassWallet');

        return connect({connector});
    };

    return (
        <div>
            <button onClick={onConnect}>Connect wallet</button>
            <div>Address: {address ?? "/"}</div>
            <div>Status: {status}</div>
            <Approval/>
        </div>
    )
}

export default App
