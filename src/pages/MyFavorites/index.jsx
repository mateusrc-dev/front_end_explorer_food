import { useState } from 'react'
import { Container, Main } from './styles'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Button } from '../../components/Button'
import Salada from '../../assets/saladaravanello.png'
import { HiOutlineCreditCard } from 'react-icons/hi'
import Pix from '../../assets/layer1.svg'
import QrCode from '../../assets/qrcode 1.svg'
import Pag from '../../assets/Vector.svg'
import { FiClock } from 'react-icons/fi'
import { FiAlertTriangle } from 'react-icons/fi'
import { BsCheckCircle } from 'react-icons/bs'
import { BiListCheck } from 'react-icons/bi'

export function MyFavorites() {

  const [background, setBackground] = useState(true)
  const [backgroundTwo, setBackgroundTwo] = useState(true)
  const [button, setButton] = useState(true)

  return (

    <Container>
      <Header />
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