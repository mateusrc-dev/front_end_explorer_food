import { Container, Main } from './styles'
import { HeaderTwo } from '../../components/HeaderTwo'
import { Footer } from '../../components/Footer'

export function RequestsAdm() {
  return (
    <Container>
      <HeaderTwo />
      <Main>
        <h1>Todos os Pedidos</h1>
        <table>
          <thead>
            <tr>
              <th>Status</th>
              <th>Nome do cliente</th>
              <th>Código</th>
              <th>Detalhamento</th>
              <th>Data e hora</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <select name="select">
                  <option value="valueOne">🔴&nbsp;&nbsp;Pendente</option>
                  <option value="valueTwo">🟡&nbsp;&nbsp;Preparando</option>
                  <option value="valueThree">🟢&nbsp;&nbsp;Entregue</option>
                </select>
              </td>
              <td>Mateus Raimundo</td>
              <td>00000003</td>
              <td>1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá</td>
              <td>20/05 às 18h00</td>
            </tr>
            <tr>
              <td>
                <select name="select">
                  <option value="valueOne">🔴&nbsp;&nbsp;Pendente</option>
                  <option value="valueTwo">🟡&nbsp;&nbsp;Preparando</option>
                  <option value="valueThree">🟢&nbsp;&nbsp;Entregue</option>
                </select>
              </td>
              <td>Larissa Carvalho</td>
              <td>00000002</td>
              <td>1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá</td>
              <td>20/05 às 18h00</td>
            </tr>
            <tr>
              <td>
                <select name="select">
                  <option value="valueOne">🔴&nbsp;&nbsp;Pendente</option>
                  <option value="valueTwo">🟡&nbsp;&nbsp;Preparando</option>
                  <option value="valueThree">🟢&nbsp;&nbsp;Entregue</option>
                </select>
              </td>
              <td>Larissa Carvalho</td>
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