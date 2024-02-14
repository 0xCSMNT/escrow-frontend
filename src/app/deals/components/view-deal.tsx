"use client";

import { useReadContract } from "wagmi";
import { verifierABI } from "../../../abi/verifierABI";
import React from "react";

const contractABI = verifierABI;
const contractAddress = process.env.NEXT_PUBLIC_ANVIL_VERIFIER_ADDRESS; // Anvil
const dealId = BigInt(0); // Deal ID to query, using BigInt for large number support

console.log(contractAddress);

// TypeScript type for the data returned by the `readDeal` function on SC
type ReadDealData = [
  string, // Party address
  string, // Counterparty address
  string, // Party token address
  bigint, // Party token amount
  string, // Counterparty token address
  bigint, // Counterparty token amount
  boolean, // Party funded?
  boolean, // Counterparty funded?
  boolean, // Deal canceled?
  boolean // Deal executed?
];


export function ViewDeal() {
  const { data, isError, isLoading } = useReadContract({
    abi: contractABI, // ABI of the contract
    address: contractAddress, // Address of the contract
    functionName: "readDeal", // Name of the function to call
    args: [dealId], // Arguments to the function
  });

  // Handle loading & error states
  if (isLoading) return <div>Loading...</div>;
  if (isError || !data) return <div>Error loading the deal data.</div>;

  // Destructure the returned data into individual variables
  const [
    party,
    counterparty,
    partyToken,
    partyTokenAmount,
    counterpartyToken,
    counterpartyTokenAmount,
    partyFunded,
    counterpartyFunded,
    dealCanceled,
    dealExecuted,
  ] = data ? (data as ReadDealData) : Array(10).fill(undefined); // Provide fallback values

  // Handle case where required data is not available
  if (!party)
    return <div>Deal data is not available or in an unexpected format.</div>;

  return (
    <div>
      <h2>Deal Details</h2>
      <p>Party: {party}</p>
      <p>Counterparty: {counterparty}</p>
      <p>Party Token: {partyToken}</p>
      <p>Party Token Amount: {partyTokenAmount.toString()}</p>
      <p>Counterparty Token: {counterpartyToken}</p>
      <p>Counterparty Token Amount: {counterpartyTokenAmount.toString()}</p>
      <p>Party Funded: {partyFunded.toString()}</p>
      <p>Counterparty Funded: {counterpartyFunded.toString()}</p>
      <p>Deal Canceled: {dealCanceled.toString()}</p>
      <p>Deal Executed: {dealExecuted.toString()}</p>
    </div>
  );
}
