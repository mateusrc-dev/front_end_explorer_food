import { Container, ButtonText, Main } from './styles'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { SlArrowLeft } from 'react-icons/sl'
import Salada from '../../assets/saladaravanello.png'


export function MyFavorites() {

  return (
    <Container>
      <Header />
      <ButtonText to="/"><SlArrowLeft />voltar para a Home</ButtonText>
      <Main>

        <div className="columnOne">
          <h1>Pratos favoritos</h1>
          <div className="requests">
            <div className="request">
              <img src={Salada} alt="imagem do prato" />
              <div className="Text">
                <div className="text">
                  <span className="name">Salada Radish</span>
                </div>
                <p>descrição do prato...</p>
              </div>
            </div>
          </div>
        </div>
        <div className="columnTwo">
          <h1>Sobremesas favoritas</h1>
          <div className="requests">
            <div className="request">
              <img src={Salada} alt="imagem do prato" />
              <div className="Text">
                <div className="text">
                  <span className="name">Salada Radish</span>
                </div>
                <p>descrição da sobremesa...</p>
              </div>
            </div>
          </div>
        </div>
        <div className="columnTwo">
          <h1>Bebidas favoritas</h1>
          <div className="requests">
            <div className="request">
              <img src={Salada} alt="imagem do prato" />
              <div className="Text">
                <div className="text">
                  <span className="name">Salada Radish</span>
                </div>
                <p>descrição da bebida...</p>
              </div>
            </div>
          </div>
        </div>
      </Main>
      <Footer />
    </Container>
  )
}