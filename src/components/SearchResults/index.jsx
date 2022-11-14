import { Container } from './styles'
import { FaClock } from "react-icons/fa"
import { CgClose } from 'react-icons/cg'
import { api } from "../../services/api"
import { useInput } from '../../hooks/input'

export function SearchResults({option, setOption, value}) {

  async function handleDelete(id) {
      await api.delete(`/search/${id}`)
      const response = await api.get(`/search/?search=${value}`)
      setOption(response.data.Search)
  }

  const { handleStates } = useInput()

  function handleSearch(option) {
    handleStates(option)
    setOption([])
  }

  return (
    <Container>
      <div className="searchResults">
        <ul>
          {
            option.map(option => (
              <li className="li" key={option.id}><FaClock /> <p onClick={() => handleSearch(option.search)} >{option.search}</p> <a onClick={() => handleDelete(option.id)} className="trash" title="Excluir"><CgClose /></a></li>
            ))
          }
        </ul>
      </div>
    </Container>
  )
}