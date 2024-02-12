"use client";

import { useAccount, useReadContract } from "wagmi";
import { verifierABI } from "../../../abi/verifierABI";

const contractABI = verifierABI;
const contractAddress = "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9";
const dealId = 0;

export function ViewDeal() {
  const { data, isError, isLoading } = useReadContract({
    abi: contractABI,
    address: contractAddress,
    functionName: "readDeal",
    args: [dealId],
  });

  console.log('Deal data:', data);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError || !data) {
    return <div>Error loading the deal data.</div>;
  }

  // Destructure the data returned from the contract call
  const {
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
  } = data;

  // Render the data in your component
  return (
    <div>
      <h2>Deal Details</h2>
      <p>Party: {party}</p>
      <p>Counterparty: {counterparty}</p>
      <p>Party Token: {partyToken}</p>
      <p>Party Token Amount: {partyTokenAmount}</p>
      <p>Counterparty Token: {counterpartyToken}</p>
      <p>Counterparty Token Amount: {counterpartyTokenAmount}</p>
      <p>Party Funded: {partyFunded ? "Yes" : "No"}</p>
      <p>Counterparty Funded: {counterpartyFunded ? "Yes" : "No"}</p>
      <p>Deal Canceled: {dealCanceled ? "Yes" : "No"}</p>
      <p>Deal Executed: {dealExecuted ? "Yes" : "No"}</p>
    </div>
  );
}
