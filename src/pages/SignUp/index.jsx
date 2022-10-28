import { BsFillHexagonFill } from 'react-icons/bs'
import { Container } from './styles'
import { Button } from '../../components/Button'

export function SignUp() {
  return (
    <Container>
      <header>
        <BsFillHexagonFill />
        <h3>food explorer</h3>
      </header>
      <div className="createLogin">
        <h1>Faça login</h1>
        <div className="input">
          <label htmlFor="email">Email</label>
          <input type="text" id="email" placeholder="Exemplo: exemplo@exemplo.com.br" />
        </div>
        <div className="input">
          <label htmlFor="password">Senha</label>
          <input type="text" id="password" placeholder="No mínimo 6 caracteres" />
        </div>
        <Button>Entrar</Button>
        <a>Criar uma conta</a>
      </div>
    </Container >
  )
}