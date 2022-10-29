import { Container, Main } from './styles'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import ballOne from '../../assets/Ellipse (1).svg'
import ballTwo from '../../assets/Ellipse (2).svg'
import ballThree from '../../assets/Ellipse.svg'

export function Requests() {
  return (
    <Container>
      <Header />
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