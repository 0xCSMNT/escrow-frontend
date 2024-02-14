"use client";

import { useReadContract } from "wagmi";
import { verifierABI } from "../../../abi/verifierABI";
import React from "react";

const contractABI = verifierABI;
const contractAddress = "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9" // ; anvil
const dealId = BigInt(0);

// "0x7a9AFdcA16849AD040e07a1CFcE9cEB658fE2d4f"; // sepolia



type ReadDealData = [
  string, // party
  string, // counterparty
  string, // partyToken
  number, // partyTokenAmount
  string, // counterpartyToken
  number, // counterpartyTokenAmount
  boolean, // partyFunded
  boolean, // counterpartyFunded
  boolean, // dealCanceled
  boolean // dealExecuted
];

export function ViewDeal() {
  const { data, isError, isLoading } = useReadContract({
    abi: contractABI,
    address: contractAddress,
    functionName: "readDeal",
    args: [dealId],
  });

  

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError || !data) {
    return <div>Error loading the deal data.</div>;
  }

  // Use a type assertion to tell TypeScript the shape of data.
  // Since 'data' could be undefined, we ensure we're operating on an array structure.
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
  ] = data ? (data as ReadDealData) : [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined];

  console.log("Deal Data 2: ", data);

  // Additional checks or fallback UI could be implemented here if the data is not in the expected format or length.
  if (!party) {
    return <div>Deal data is not available or in an unexpected format.</div>;
  }

  return (
    <div>
      <h2>Deal Details</h2>
      <p>Party: {party}</p>
      <p>Counterparty: {counterparty}</p>
      <p>Party Token: {partyToken}</p>
      <p>Party Token Amount: {partyTokenAmount}</p>
      {/* You can display more details here using the other variables */}
    </div>
  );
}
