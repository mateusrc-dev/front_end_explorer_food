import { BsFillHexagonFill } from 'react-icons/bs'
import { CgNotes } from 'react-icons/cg'
import { FiLogOut } from 'react-icons/fi'
import { Container, Logout } from './styles'
import { ButtonTwo } from '../ButtonTwo'
import { Input } from '../Input'
import { BiSearchAlt } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { useAuth } from '../../hooks/auth'

export function Header() {
  const { signOut } = useAuth()
  return (
    <Container>
      <div className="logo">
        <BsFillHexagonFill />
        <span>food explorer</span>
      </div>
      <div className="gap">
        <Link to="/myfavorites"><a>Meus favoritos</a></Link>
        <Input placeholder="Busque pelas suas opções de prato" ><BiSearchAlt /></Input>
        <div className="buttons">
          <Link to="/myrequest">
            <ButtonTwo>
              <CgNotes />Meu pedido atual (0)
            </ButtonTwo>
          </Link>
          <Link to="/requests">
            <ButtonTwo>
              <CgNotes />Todos os meus pedidos (0)
            </ButtonTwo>
          </Link>
        </div>
      </div>
      <Logout onClick={signOut}>
        <FiLogOut />
      </Logout>
    </Container>
  )
}