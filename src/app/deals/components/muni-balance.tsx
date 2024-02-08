"use client";

import { useAccount, useBalance } from "wagmi";

export function MUniBalance() {
    const account = useAccount();
    const walletAddress = account.address;

    const { data: mUniBalance } = useBalance({
        address: walletAddress,
        token: "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512"
    });
    

    return (
        <div>   
            mUni Balance: {mUniBalance?.formatted} {mUniBalance?.symbol}
        </div>
    );
}