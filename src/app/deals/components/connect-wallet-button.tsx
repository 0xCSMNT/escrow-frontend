"use client";

import { Button } from "@/components/ui/button";
import { useAccount, useConnect, useDisconnect } from 'wagmi'


export function ConnectWalletButton() {
  const account = useAccount()
  const { connectors, connect, status, error } = useConnect()
  const { disconnect } = useDisconnect()

  return (
    <div>
        <h2>Connect</h2>
        {connectors.map((connector) => (
          <button
            key={connector.uid}
            onClick={() => connect({ connector })}
            type="button"
          >
            {connector.name}
          </button>
        ))}
        <div>{status}</div>
        <div>{error?.message}</div>
      </div>
    
  );
}
