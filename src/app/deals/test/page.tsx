"use client"

import { ConnectWalletButton } from "../components/connect-wallet-button";
import { EthBalance } from "../components/eth-balance";
import { MLinkBalance } from "../components/mlink-balance";
import { MUniBalance } from "../components/muni-balance";
import { ViewDeal } from "../components/view-deal";

function TestPage() {
    return (
      <div>
        <h1>Test Page</h1>
        <h2>Connect Wallet</h2>
        <ConnectWalletButton />
        <br />
        <EthBalance />
        <br />
        <MLinkBalance />
        <MUniBalance />
        <ViewDeal />
      </div>
    );
  }
  
  export default TestPage;
