'use client'

import { StarknetWindowObject } from 'get-starknet'
import { FC, ReactNode, createContext, useState } from 'react'

type ContextValue = {
  //TODO: cleanup, that is actually too much data
  onSetStarknetData: (data: StarknetWindowObject | null) => void
  starknetData: StarknetWindowObject | null
}

export const StarknetContext = createContext<ContextValue>({
  onSetStarknetData: () => void 0,
  starknetData: null
})

type Props = {
  children: ReactNode
}

export const StarknetProvider = (props: Props) => {
  const { children } = props

  const [starknetData, setStarknetData] = useState<StarknetWindowObject | null>(null)

  const onSetStarknetData = (data: StarknetWindowObject | null) => {
    setStarknetData(data)
  }

  return <StarknetContext.Provider value={{ starknetData, onSetStarknetData }} >
    {children}
  </StarknetContext.Provider>

}