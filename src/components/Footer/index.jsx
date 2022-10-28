import { Container } from './styles'
import { BsFillHexagonFill } from 'react-icons/bs'

export function Footer() {
  return (
    <Container>
      <div className="logo">
        <BsFillHexagonFill />
        <span>food explorer</span>
      </div>
      <span>© 2022 - Todos os direitos reservados.</span>
    </Container>
  )
}