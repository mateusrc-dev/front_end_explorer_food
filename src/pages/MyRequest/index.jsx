import { useState } from 'react'
import { Container, Main, ButtonText } from './styles'
import { SlArrowLeft } from 'react-icons/sl'
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
import { Link } from 'react-router-dom'

export function MyRequest() {
 
  const [background, setBackground] = useState(true)
  const [backgroundTwo, setBackgroundTwo] = useState(true)
  const [button, setButton] = useState(true)

  return (

    <Container>
      <Header />
      <ButtonText to="/"><SlArrowLeft />voltar</ButtonText>
      <Main>
        <div className="columnOne">
          <h1>Meu pedido</h1>
          <div className="requests">
            <div className="request">
              <img src={Salada} alt="imagem do prato" />
              <div className="Text">
                <div className="text">
                  <span className="name">1x Salada Radish</span><span className="price">R$ 25,97</span>
                </div>
                <p>Excluir</p>
              </div>
            </div>
            <div className="request">
              <img src={Salada} alt="imagem do prato" />
              <div className="Text">
                <div className="text">
                  <span className="name">1x Salada Radish</span><span className="price">R$ 25,97</span>
                </div>
                <p>Excluir</p>
              </div>
            </div>
            <div className="request">
              <img src={Salada} alt="imagem do prato" />
              <div className="Text">
                <div className="text">
                  <span className="name">1x Salada Radish</span><span className="price">R$ 25,97</span>
                </div>
                <p>Excluir</p>
              </div>
            </div>
          </div>
          <h2>Total: R$ 103,88</h2>
        </div>
        <div className="columnTwo">
          <h1>Pagamento</h1>
          <div className="headerTable">
            <div className={background ? "pix" : "pixTwo"}  onClick={() => setBackground(!background)}>
              <img src={Pix} alt="pix" /><p>PIX</p>
            </div>
            <div className={backgroundTwo ? "credit" : "creditTwo"} onClick={() => setBackgroundTwo(!backgroundTwo)}>
              <HiOutlineCreditCard /><p>Crédito</p>
            </div>
          </div>
          <div className="row">
            <div className="image">
              <div className={button ? "img" : "imgnone"}>
                <img className={!background && backgroundTwo ? "img" : "imgnone"} src={QrCode} alt="qrcode" />
              </div>
            </div>
            <div className={!backgroundTwo && background ? "form" : "formnone"}  >
              <div className={button ? "form" : "formnone"}>
                <label className="input" htmlFor="num">Número do Cartão
                  <input type="text" placeholder="0000 0000 0000 0000" id="num" />
                </label>
                <div className="valAndCvc">
                  <label className="input" htmlFor="val">Validade
                    <input type="text" placeholder="04/25" id="val" />
                  </label>
                  <label className="input" htmlFor="cvc">CVC
                    <input type="text" placeholder="04/25" id="cvc" />
                  </label>
                </div>
                <div className="button" onClick={() => setButton(!button)}>
                  <Button><img src={Pag} alt="pag" />Finalizar pagamento</Button>
                </div>
              </div>
            </div>
            <div className={background && backgroundTwo ? "aguardandopagamentoOne" : "aguardandopagamentoTwo"}>
              <div className={button ? "aguardandopagamentoOne" : "aguardandopagamentoTwo"}>
                <FiClock />
                <p>Aguardando pagamento!</p>
              </div>
            </div>
            <div className={!background && !backgroundTwo ? "alertOne" : "alertTwo"}>
              <div className={button ? "alertOne" : "alertTwo"}>
                <FiAlertTriangle />
                <p>Selecione apenas uma opção!</p>
              </div>
            </div>
            <div className={!button ? "buttonOne" : "buttonTwo"}>
              <BsCheckCircle />
              <p>Pagamento aprovado!</p>
              <Link to="/requests"><a><BiListCheck className="svg"/>Ver todos os pedidos</a></Link>
            </div>
          </div>
        </div>
      </Main>
      <Footer />
    </Container>
  )
}