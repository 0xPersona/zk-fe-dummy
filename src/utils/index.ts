import { StarknetWindowObject, connect, disconnect } from "get-starknet"

export const connectWallet = async (
  onSetStarknetData: (data: StarknetWindowObject | null) => void
) => {
  try {
    // allows a user to pick a wallet on button click
    const starknet = await connect()
    // connect to the wallet
    console.log("🚀 ~ file: connect.ts:9 ~ connectWal ~ starknet:", starknet)
    onSetStarknetData(starknet)
    // set account provider to provider state
  } catch (error: any) {
    alert(error.message)
  }
}

export const disconnectWallet = async () => {
  const disconnectThing = await disconnect()
  console.log(
    "🚀 ~ file: index.ts:20 ~ disconnectWal ~ disconnectThing:",
    disconnectThing
  )
}

export const shortenAddress = (address: string) => {
  const firstPart = address.slice(0, 5)
  const lastPart = address.slice(-4)

  return `${firstPart}…${lastPart}`
}
