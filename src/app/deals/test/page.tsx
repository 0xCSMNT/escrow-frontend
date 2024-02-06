"use client"

import { ConnectWalletButton } from "../components/connect-wallet-button";
import { useBalance } from "wagmi";

function TestPage() {
  const result = useBalance({
    address: "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
    // token: "0x5FbDB2315678afecb367f032d93F642f64180aa3"
  });
  return (
    <>
      <div>
        <h1>Test Page</h1>
        <h2>Connect Wallet</h2>
        <ConnectWalletButton />
      </div>
      {result.data && <p>Balance: {result.data.formatted}</p>}
      
    </>
  );
}

export default TestPage;
