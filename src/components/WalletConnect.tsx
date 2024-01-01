'use client'

import { StarknetContext } from "@/state/StarknetProvider"
import { connectWallet, shortenAddress, disconnectWallet } from "@/utils"
import { useContext } from "react"

export const WalletConnect = () => {
  const { starknetData, onSetStarknetData } = useContext(StarknetContext)

  if (starknetData?.account?.address) {
    return <div>
      <div>
        {shortenAddress(window.starknet?.account?.address)}
      </div>

      <button className="p-3 rounded bg-slate-300" onClick={disconnectWallet}>Disconnect</button>
    </div>
  }

  return <button className="p-3 rounded bg-slate-300" onClick={() => connectWallet(onSetStarknetData)}>Connect wallet</button>
}