"use client";
import Link from "next/link";
import ConnectButton from "./connectButton";
// import { useAccount } from "wagmi";
// import Web3 from "web3";

export default function Headers() {
  // const web3 = new Web3(window.ethereum);

  // const { address, isConnected } = useAccount();

  // const send = async function (addr) {
  //   console.log(address);
  //   const tx = {
  //     from: addr,
  //     to: "0xd92CA20C08F9deDe019aF06e63E3218406979DC8",
  //     value: web3.utils.toWei("0.001", "ether"), // Convert value to Wei
  //     gas: 25000, // Estimated gas limit for a simple transaction
  //     gasPrice: web3.utils.toWei("10", "gwei"), // Gas price in Gwei
  //   };

  //   const txHash = await web3.eth.sendTransaction(tx);
  //   const receipt = await web3.eth.getTransactionReceipt(txHash);
  //   console.log(receipt);
  // };

  return (
    <>
      <nav className=" flex w-[100%] p-3 border-[1px] border-gray-700 rounded-lg ">
        <div className="text-white font-semibold p-3 mx-3 ">Soufiane Rafiq</div>
        <div className="text-white font-semibold p-3 mx-3 ">
          <Link href="/"> About Me</Link>
        </div>
        <div className="text-white font-semibold p-3 mx-3 ">
          <Link href="/portfolio">Portfolio</Link>
        </div>
        <div className="text-white font-semibold p-3 mx-3 ">
          <Link href="/games">Games</Link>
        </div>
        <div className="ml-auto">
          <ConnectButton />
        </div>

        {/* <button onClick={() => send(address)}>send</button> */}
      </nav>
    </>
  );
}
