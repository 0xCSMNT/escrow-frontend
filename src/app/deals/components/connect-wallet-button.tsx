"use client";

import { Button } from "@/components/ui/button";
import { useAccount, useConnect, useDisconnect, useBalance } from "wagmi";

export function ConnectWalletButton() {
  const account = useAccount();
  const { connectors, connect, status, error } = useConnect();
  const { disconnect } = useDisconnect();
  const { address } = useAccount();

  const { data: balanceData } = useBalance({
    address: address,
  });

  return (
    <>
      <div>
        status: {account.status}
        <br />
        addresses: {JSON.stringify(account.addresses)}
        <br />
        chainId: {account.chainId}
      </div>
      <div>
        {connectors.map((connector) => (
          <Button
            key={connector.uid}
            onClick={() => connect({ connector })}
            type="button"
          >
            connect with {connector.name}
          </Button>
        ))}
        <div>status: {status}</div>
        <div>error: {error?.message}</div>
      </div>
      <Button type="button" onClick={() => disconnect()}>
        Disconnect
      </Button> 
      <br /> 
      Balance: {balanceData?.formatted} {balanceData?.symbol}    
    </>
  );
}
