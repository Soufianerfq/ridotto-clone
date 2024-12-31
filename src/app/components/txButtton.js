import { useWeb3 } from "../hooks/useWeb3";
import { useAccount } from "wagmi";
import { ercContract } from "../utils/utils";
import { parseUnits } from "viem";

export default function TxBtn() {
  const { address: userAddress } = useAccount();
  const { writeContract, approveWithAllowance, readContract } = useWeb3();

  const handleClick = async () => {
    const SEPOLIA_USDT = "0x7169D38820dfd117C3FA1f22a697dBA58d90BA06"; // haven't usdt on balance so gonna use NFUEL
    const SEPOLIA_NFUEL = "0x80f7659E31d6631CE2f9f05DC2794377A52ae5D7";
    const my_second_wallet = "0xd92CA20C08F9deDe019aF06e63E3218406979DC8";
    const amount = "1";

    try {
      const decimals = await readContract({
        address: SEPOLIA_NFUEL,
        functionName: "decimals",
        contract: ercContract,
      });

      const isApproved = await approveWithAllowance({
        owner: userAddress,
        address: SEPOLIA_USDT,
        spender: my_second_wallet,
        amount,
      });

      if (!isApproved) return;

      const tx = await writeContract({
        contract: ercContract,
        address: SEPOLIA_USDT,
        functionName: "transfer",
        args: [my_second_wallet, parseUnits(amount, decimals)],
      });

      if (!tx) return;

      console.log("Transfer successful");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <button onClick={() => handleClick()}>send</button>
    </>
  );
}
