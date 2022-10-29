import { Container, Main, ButtonText } from './styles'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { SlArrowLeft } from 'react-icons/sl'

export function Requests() {
  return (
    <Container>
      <Header />
      <ButtonText to="/"><SlArrowLeft />voltar para a Home</ButtonText>
      <Main>
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
            <tr>
              <td>🔴&nbsp;&nbsp;Pendente</td>
              <td>00000003</td>
              <td>1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá</td>
              <td>20/05 às 18h00</td>
            </tr>
            <tr>
              <td>🟡&nbsp;&nbsp;Preparando</td>
              <td>00000002</td>
              <td>1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá</td>
              <td>20/05 às 18h00</td>
            </tr>
            <tr>
              <td>🟢&nbsp;&nbsp;Entregue</td>
              <td>00000001</td>
              <td>1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá</td>
              <td>20/05 às 18h00</td>
            </tr>
          </tbody>
        </table>
      </Main>
      <Footer />
    </Container>
  )
}