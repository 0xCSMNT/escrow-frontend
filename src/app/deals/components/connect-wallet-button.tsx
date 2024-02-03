"use client";

// import { Button } from "@/components/ui/button";
import { Web3Provider } from "@/app/Web3Provider";
import { ConnectKitButton } from "connectkit";

export function ConnectWalletButton() {
  return (
    <Web3Provider>
      <ConnectKitButton />
    </Web3Provider>
  );
}
