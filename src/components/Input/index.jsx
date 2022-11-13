import { useNavigate } from 'react-router-dom'
import { Container } from './styles'
import { useState, useRef, useEffect } from "react"
import { useInput } from '../../hooks/input'

export function Input({ children, placeholder }) {
  const [search, setSearch] = useState("")

  const navigate = useNavigate()

  const input = useRef()

  useEffect(() => {
    input.current.addEventListener("keypress", function(e) {
      if(e.key === 'Enter') {
        navigate("/")
      }
    })
  }, [])
  
  function handleSearch() {
    navigate("/")
  }

  const { handleStates } = useInput()
  handleStates(search)

  return (
    <Container>
      <input ref={input} type="text" value={ search } placeholder={placeholder} onChange={(e) => setSearch(e.target.value)} />
      <button onClick={handleSearch}>{children}</button>
    </Container>
  )
}