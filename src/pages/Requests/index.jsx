import { Container, ButtonText } from './styles'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { SlArrowLeft } from 'react-icons/sl'
import { useState, useEffect } from 'react'
import { api } from "../../services/api"
import { BsTrashFill } from "react-icons/bs"

export function Requests() {
  const [request, setRequest] = useState([])

  useEffect(() => {
    async function fetchRequests() {
      const response = await api.get("/allrequests")
      console.log(response.data.allRequests)
      setRequest(response.data.allRequests)
    }
    fetchRequests()
  }, [request])

  async function handleDelete(id) {
    await api.delete(`/allrequests/${id}`)
  }

  return (
    <Container>
      <Header />
      <main>
        <ButtonText to="/"><SlArrowLeft />voltar para a Home</ButtonText>
        <h1>Pedidos</h1>
        <table>
          <thead>
            <tr>
              <th>Status</th>
              <th>Código</th>
              <th>Detalhamento</th>
              <th>Data e hora</th>
            </tr>
          </thead>
          <tbody>
            {
              request.map(request => (
                <tr>
                  <td>{request.status}</td>
                  <td>{request.id}</td>
                  <td>{request.details}</td>
                  <td>{request.created_at} <button onClick={() => handleDelete(request.id)} className={request.status === "🟢Entregue" ? "" : "none"}><BsTrashFill />Excluir</button></td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </main>
      <Footer />
    </Container>
  )
}