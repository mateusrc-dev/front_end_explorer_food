import { createContext, useContext, useState } from "react"
export const InputContext = createContext({})

function InputProvider({ children }) {
  const [search, setSearch] = useState("")


  function handleStates( Search ) {
    setSearch(Search)
  }

  return (
    <InputContext.Provider value={{ search, handleStates }}>
      {children}
    </InputContext.Provider>
  )
}

function useInput() {
  const context = useContext(InputContext)
  return context
}

export { InputProvider, useInput }