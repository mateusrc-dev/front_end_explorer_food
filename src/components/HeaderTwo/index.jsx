import { BsFillHexagonFill } from 'react-icons/bs'
import { Container, Logout } from './styles'
import { FiLogOut } from 'react-icons/fi'


export function HeaderTwo() {
  return (
    <Container>
      <div className="logo">
        <BsFillHexagonFill />
        <span>food explorer</span>
      </div>
      <div className="adm">
        <p>Administrador</p>
        <Logout>
          <FiLogOut />
        </Logout>
      </div>
    </Container>
  )
}