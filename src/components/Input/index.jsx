import { useNavigate } from 'react-router-dom'
import { Container } from './styles'
import { useState, useRef } from "react"
import { useInput } from '../../hooks/input'
import { api } from "../../services/api"
import { SearchResults } from '../SearchResults'

export function Input({ children, placeholder, value }) {
  const [option, setOption] = useState([])
  const navigate = useNavigate()
  const input = useRef(null)


  async function searchInput(e) {
    if (e.target.value.length == 0) {
      setOption([])
      return
    } 
      const response = await api.get(`/search/?search=${value}`)
      setOption(response.data.Search)
    
    if (e.key === 'Enter') {
      if (e.target.value.length == 0) {
        alert("Digite algo para pesquisar!")
      } else {
        api.post("/search", { search: e.target.value })
        navigate("/")
      }
    }
  }

  async function handleSearch() {
    if (value.length == 0) {
      alert("Digite algo para pesquisar!")
    } else {
      await api.post("/search", { search: value })
      navigate("/")
    }
  }

  const { handleStates } = useInput()

  return (
    <Container>
      <input ref={input} type="search"   value={value} placeholder={placeholder} onKeyDown={(e) => searchInput(e)} onChange={(e) => handleStates(e.target.value)} />
      <button onClick={handleSearch}>{children}</button>
      <SearchResults option={option} setOption={setOption} value={value} />
    </Container>
  )
}