import { useNavigate } from 'react-router-dom'
import { Container } from './styles'

export function Input({placeholder, children}) {
  const navigate = useNavigate()
  function handleReturn() {
    if(confirm("Deseja mesmo retornar a página inicial?")) {
      navigate("/")
    }
  }
  return (
    <Container>
      {children}
      <input type="text" placeholder={placeholder} onClick={handleReturn} onChange={handleReturn}/>
    </Container>
  )
}