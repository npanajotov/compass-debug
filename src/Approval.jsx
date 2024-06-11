import useTokenApproval from "./token-approval.js";
import {useAccount} from "wagmi";

const Approval = () => {
    const {approval} = useTokenApproval('0xFB43069f6d0473B85686a85F4Ce4Fc1FD8F00875'); // Balancer/Jelly Vault contract
    const {address} = useAccount();


    const onAddAllowance = () => {
        approval({asset: '0x9a71012b13ca4d3d0c629e1f9e8f5d6c4f9f8f7a', maxAmountIn: '100'}).then(result => {
            alert('Success!');
            console.log(result)
        }).catch(error => {
            alert("Failed :( ");
            console.log(error);
        })
    }

    return (
        <div>
            {
                address ? <div>
                    <button onClick={onAddAllowance}>Add allowance</button>
                </div> : null
            }
        </div>
    );
};

export default Approval;
