"use client"

import { useAccount, useBalance } from "wagmi";

export function EthBalance() {
    const account = useAccount();
    const walletAddress = account.address;

    const { data: balanceData } = useBalance({
        address: walletAddress,
    });

    return (
        <>
            <div>
                Balance: {balanceData?.formatted} {balanceData?.symbol}
            </div>
        </>
    );
}