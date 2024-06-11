import {useState} from "react";
import {ethers} from "ethers";
import erc20Abi from "./abis/erc20.json";
import {useEthersSigner} from "./useEthersSigner.js";

const useTokenApproval = (contractAddress) => {
    const signer = useEthersSigner();
    const [isSuccess, setIsSuccess] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [error, setError] = useState();

    const approval = async ({asset, maxAmountIn}) => {
        setIsLoading(true);
        setIsError(false);
        setError(undefined);

        try {
            const tokenContract = new ethers.Contract(asset, erc20Abi, signer);
            const tx = await tokenContract.approve(contractAddress, maxAmountIn);
            await tx.wait();

            setIsSuccess(true);

            return true;
        } catch (error) {
            setIsSuccess(false);
            setIsError(true);

            setError(error);
            return false;
        } finally {
            setIsLoading(false);
        }
    };

    return {
        isSuccess,
        isLoading,
        isError,
        error,
        approval,
    };
};

export default useTokenApproval;
