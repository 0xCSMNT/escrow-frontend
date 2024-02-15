"use client";

import React from "react";
import { useWriteContract } from "wagmi";
import { verifierABI } from "../../../abi/verifierABI";

const contractABI = verifierABI;
const contractAddress = process.env.NEXT_PUBLIC_ANVIL_VERIFIER_ADDRESS; // Anvil

export function CreateDeal() {
    const { data: hash, writeContract } = useWriteContract()
    async function submit(e: React.FormEvent<HTMLFormElement>) { 
        e.preventDefault() 
        const formData = new FormData(e.target as HTMLFormElement);
        const counterparty = formData.get('counterparty address') as string; 
        const partyToken = formData.get('party token address') as string;
        const partyTokenAmount = formData.get('party token amount') as string;
        const counterpartyToken = formData.get('counterparty token address') as string;
        const counterpartyTokenAmount = formData.get('counterparty token amount') as string;
        writeContract({
            abi: contractABI,
            address: contractAddress,
            functionName: "createDeal",
            args: [counterparty, partyToken, BigInt(partyTokenAmount), counterpartyToken, BigInt(counterpartyTokenAmount)]
        })
    }
  return (
    <form onSubmit={submit}>
      <h2>Create Deal</h2>
      <input
        name="counterparty address"
        placeholder="counterparty address"
        required
      />
      <br />
      <input
        name="party token address"
        placeholder="party token address"
        required
      />
      <br />
      <input
        name="party token amount"
        placeholder="party token amount"
        required
      />
      <br />
      <input
        name="counterparty token address"
        placeholder="counterparty token address"
        required
      />
      <br />
      <input
        name="counterparty token amount"
        placeholder="counterparty token amount"
        required
      />
      <br />
      <button type="submit">Create</button>
      {hash && <div>Transaction Hash: {hash}</div>} 
    </form>
  );
}
