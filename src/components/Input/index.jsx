import { useNavigate } from 'react-router-dom'
import { Container } from './styles'
import { useState, useRef, useEffect } from "react"
import { useInput } from '../../hooks/input'
import { api } from "../../services/api"
import { FiClock } from 'react-icons/fi'

export function Input({ children, placeholder, value }) {
  const [search, setSearch] = useState("")
  const [option, setOption] = useState([])
  const navigate = useNavigate()

  //console.log(option)
  useEffect(() => {
    async function fetchOptions() {
      const response = await api.get(`/search/?search=${search}`)
      setOption(response.data.Search)
    }
    fetchOptions()
  }, [search])


  function searchInput(e) {
    setSearch(e.target.value)
    if (e.key === 'Enter') {
      api.post("/search", { search: e.target.value })
      navigate("/")
    }
  }

  async function handleSearch() {
    await api.post("/search", { search })
    navigate("/")
  }

  const { handleStates } = useInput()

  return (
    <Container>
      <input type="search" list="list" value={value} placeholder={placeholder} onKeyDown={(e) => searchInput(e)} onChange={(e) => handleStates(e.target.value)} />
      <button onClick={handleSearch}>{children}</button>

      <datalist id="list">
        {
          option.map(option => (
            <option>{option.search}<FiClock/></option>
          ))
        }
      </datalist>

    </Container>
  )
}