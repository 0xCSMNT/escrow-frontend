"use client";

import { useReadContract } from "wagmi";
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

  console.log("Deal data:", data);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError || !data) {
    return <div>Error loading the deal data.</div>;
  }

  // Destructure the data returned from the contract call
  const { party } = data;

  // Render the data in your component
  return (
    <div>
      <h2>Deal Details</h2>
      <p>Party: {party}</p>
    </div>
  );
}
