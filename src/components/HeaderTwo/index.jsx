import { BsFillHexagonFill } from 'react-icons/bs'
import { Container } from './styles'


export function HeaderTwo() {
  return (
    <Container>
      <div className="logo">
        <BsFillHexagonFill />
        <span>food explorer</span>
      </div>
      <div className="adm">
        <p>Administrador</p>
      </div>
    </Container>
  )
}