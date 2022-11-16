import { createContext, useContext, useState } from "react"
export const StatePageContext = createContext({})

function StatePageProvider({ children }) {
  const [statePage, setStatePage] = useState(false)

  function handleStatesPages( StatePage ) {
    if (StatePage === true) {
      setStatePage(false)
    } else {
      setStatePage(true)
    }
  }

  return (
    <StatePageContext.Provider value={{ statePage, handleStatesPages }}>
      {children}
    </StatePageContext.Provider>
  )
}

function useStatePage() {
  const context = useContext(StatePageContext)
  return context
}

export { StatePageProvider, useStatePage }