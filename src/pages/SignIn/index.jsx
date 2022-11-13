import { useAuth } from '../../hooks/auth'
import { useState } from "react"
import { BsFillHexagonFill } from 'react-icons/bs'
import { Container } from './styles'
import { Button } from '../../components/Button'
import { Link } from 'react-router-dom'

export function SignIn() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { signIn } = useAuth()
  function handleSignIn() {
    signIn({ email, password })
  }

  return (
    <Container>
      <header >
        <BsFillHexagonFill />
        <h3>food explorer</h3>
      </header>
      <div className="createLogin" >
        <h1>Faça login</h1>
        <div className="input" >
          <label htmlFor="email">Email</label>
          <input type="text" id="email" placeholder="Exemplo: exemplo@exemplo.com.br" onChange={e => setEmail(e.target.value)} />
        </div>
        <div className="input">
          <label htmlFor="password">Senha</label>
          <input type="password" id="password" placeholder="No mínimo 6 caracteres" onChange={e => setPassword(e.target.value)} />
        </div>
        <Button onClick={handleSignIn}>Entrar</Button>
        <Link to="/register"><a>Criar uma conta</a></Link>
        <Link to="/adm">Entrar como Administrador</Link>
      </div>
    </Container >
  )
}