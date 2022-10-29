import { BsFillHexagonFill } from 'react-icons/bs'
import { CgNotes } from 'react-icons/cg'
import { FiLogOut } from 'react-icons/fi'
import { Container, Logout } from './styles'
import { ButtonTwo } from '../ButtonTwo'
import { Input } from '../Input'
import { BiSearchAlt } from 'react-icons/bi'
import { Link } from 'react-router-dom'

export function Header() {
  return (
    <Container>
      <div className="logo">
        <BsFillHexagonFill />
        <span>food explorer</span>
      </div>
      <div className="gap">
        <Link to="/myfavorites"><a>Meus favoritos</a></Link>
        <Input placeholder="Busque pelas suas opções de prato" ><BiSearchAlt /></Input>
        <Link to="/myrequest">
          <ButtonTwo>
            <CgNotes />Meu pedido (0)
          </ButtonTwo>
        </Link>
      </div>
      <Logout>
        <FiLogOut />
      </Logout>
    </Container>
  )
}