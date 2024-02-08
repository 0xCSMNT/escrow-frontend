"use client"

import { ConnectWalletButton } from "../components/connect-wallet-button";
import { EthBalance } from "../components/eth-balance";

function TestPage() {
    return (
      <div>
        <h1>Test Page</h1>
        <h2>Connect Wallet</h2>
        <ConnectWalletButton />
        <br />
        <EthBalance />
      </div>
    );
  }
  
  export default TestPage;
