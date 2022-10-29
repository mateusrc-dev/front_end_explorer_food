import { BsFillHexagonFill } from 'react-icons/bs'
import { Container } from './styles'
import { Button } from '../../components/Button'
import { Link } from 'react-router-dom'

export function SignUpAdm() {
  return (
    <Container>
      <header>
        <BsFillHexagonFill />
        <h3>food explorer administrador</h3>
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
        <Link to="/"><a>Voltar para entrar como cliente</a></Link>
      </div>
    </Container >
  )
}