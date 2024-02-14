"use client"

import { ConnectWalletButton } from "../components/connect-wallet-button";
import { CreateDeal } from "../components/create-deal";
import { EthBalance } from "../components/eth-balance";
import { MLinkBalance } from "../components/mlink-balance";
import { MUniBalance } from "../components/muni-balance";
import { ViewDeal } from "../components/view-deal";

function TestPage() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div>
        <h1>Test Page</h1>
        <h2>Connect Wallet</h2>
        <ConnectWalletButton />
        <br />
        <EthBalance />
        <br />
        <MLinkBalance />
        <MUniBalance />
        <br />
        <ViewDeal />
      </div>
      <div>
        <CreateDeal />
      </div>        
    </div>
  );
}

  
  export default TestPage;
