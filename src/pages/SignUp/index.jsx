import { useState } from "react"
import { api } from "../../services/api"
import { BsFillHexagonFill } from 'react-icons/bs'
import { Container } from './styles'
import { Button } from '../../components/Button'
import { Link, useNavigate } from 'react-router-dom'

export function SignUp() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  function handleSignUp() {
    if (!name || !email) {
      return alert("Preencha todos os campos")
    }
    if (password.length < 6) {
      return alert("A senha tem que ter pelo menos 6 caracteres")
    }
    api.post("/users", { name, email, password }).then(() => {alert("Usuário cadastrado com sucesso!"); navigate("/")}).catch(error => {if(error.response){alert(error.response.data.message)}else{alert("Não foi possível cadastrar!")}})
  }
  return (
    <Container>
      <header>
        <BsFillHexagonFill />
        <h3>food explorer</h3>
      </header>
      <div className="createLogin">
        <h1>Crie a sua conta</h1>
        <div className="input">
          <label htmlFor="name">Seu nome</label>
          <input type="text" id="name" placeholder="Exemplo: Mateus Carvalho" onChange={e => setName(e.target.value)} />
        </div>
        <div className="input">
          <label htmlFor="email">Email</label>
          <input type="text" id="email" placeholder="Exemplo: exemplo@exemplo.com.br" onChange={e => setEmail(e.target.value)}/>
        </div>
        <div className="input">
          <label htmlFor="password">Senha</label>
          <input type="text" id="password" placeholder="No mínimo 6 caracteres" onChange={e => setPassword(e.target.value)}/>
        </div>
        <Button onClick={handleSignUp}>Criar conta</Button>
        <Link to="/"><a>Já tenho uma conta</a></Link>
      </div>
    </Container >
  )
}