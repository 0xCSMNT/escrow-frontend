"use client";

import { useAccount, useBalance } from "wagmi";

export function MLinkBalance() {
    const account = useAccount();
    const walletAddress = account.address;

    const { data: mLinkBalance } = useBalance({
        address: walletAddress,
        token: "0x5FbDB2315678afecb367f032d93F642f64180aa3"
    });
    

    return (
        <div>   
            mLink Balance: {mLinkBalance?.formatted} {mLinkBalance?.symbol}
        </div>
    );
}