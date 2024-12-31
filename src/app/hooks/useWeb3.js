import { createPublicClient, formatUnits, http, parseUnits } from "viem";
import { useAccount, useWriteContract } from "wagmi";
import { sepolia } from "viem/chains";
import { ercContract } from "../utils/utils";

export const useWeb3 = () => {
  const { address: userAddress } = useAccount();

  const { writeContractAsync } = useWriteContract();
  let client = "";

  const newChain = sepolia;

  if (!newChain) {
    return null;
  }

  client = createPublicClient({
    transport: http(),
    chain: newChain,
  });

  const readContract = async ({ address, functionName, args, contract }) =>
    client.readContract({
      ...contract,
      address,
      functionName,
      args,
    });

  const writeContract = async ({
    address,
    functionName,
    args,
    contract,
    value,
  }) =>
    writeContractAsync({
      ...contract,
      address,
      functionName,
      args,
      value,
    });

  const approveToken = async ({ address, spender, amount }) =>
    writeContract({
      contract: ercContract,
      address,
      functionName: "approve",
      args: [spender, amount],
    });

  const approveWithAllowance = async ({ owner, address, spender, amount }) => {
    let approvedAmount = null;

    try {
      const decimalsData = await readContract({
        address,
        functionName: "decimals",
        contract: ercContract,
      });
      const decimals = decimalsData;
      const allowance = await readContract({
        address,
        functionName: "allowance",
        args: [owner, spender],
        contract: ercContract,
      });

      if (allowance !== undefined) {
        const amountWithDecimals = parseUnits(amount, decimals);

        if (allowance < amountWithDecimals) {
          try {
            await approveToken({
              address,
              spender,
              amount: BigInt(amountWithDecimals),
            });
          } catch (error) {
            console.error(error);
            return null;
          }

          approvedAmount = await new Promise((resolve) => {
            const intervalId = setInterval(async () => {
              const newAllowance = await readContract({
                address,
                functionName: "allowance",
                args: [owner, spender],
                contract: ercContract,
              });

              if (newAllowance !== allowance) {
                resolve(formatUnits(newAllowance, decimals));
                clearInterval(intervalId);
              }
            }, 1000);
          });
        } else {
          return Number(formatUnits(allowance, decimals));
        }
      } else {
        return null;
      }
    } catch (error) {
      console.error(error);
      return null;
    }

    if (Number(approvedAmount) < Number(amount)) {
      return null;
    }

    return Number(approvedAmount);
  };

  return {
    approveToken,
    approveWithAllowance,
    readContract,
    writeContract,
  };
};
