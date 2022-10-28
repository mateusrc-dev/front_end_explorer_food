import { BsFillHexagonFill } from 'react-icons/bs'
import { CgNotes } from 'react-icons/cg'
import { FiLogOut } from 'react-icons/fi'
import { Container, Logout } from './styles'
import { ButtonTwo } from '../ButtonTwo'
import { Input } from '../Input'
import { BiSearchAlt } from 'react-icons/bi'

export function Header() {
  return (
    <Container>
      <div className="logo">
        <BsFillHexagonFill />
        <span>food explorer</span>
      </div>
      <div className="gap">
        <a>Meus favoritos</a>
        <Input placeholder="Busque pelas suas opções de prato" ><BiSearchAlt /></Input>
        <ButtonTwo>
          <CgNotes />Meu pedido (0)
        </ButtonTwo>
      </div>
      <Logout>
        <FiLogOut />
      </Logout>
    </Container>
  )
}