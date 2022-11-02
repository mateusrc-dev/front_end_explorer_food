import { BsFillHexagonFill } from 'react-icons/bs'
import { Container, Logout } from './styles'
import { FiLogOut } from 'react-icons/fi'
import { useAuthAdm } from '../../hooks/authAdm'

export function HeaderTwo() {
  const { signOut } = useAuthAdm()
  return (
    <Container>
      <div className="logo">
        <BsFillHexagonFill />
        <span>food explorer</span>
      </div>
      <div className="adm">
        <p>Administrador</p>
        <Logout onClick={signOut}>
          <FiLogOut />
        </Logout>
      </div>
    </Container>
  )
}