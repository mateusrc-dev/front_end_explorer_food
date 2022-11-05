import { useState, useEffect } from 'react'
import { Container, ButtonText } from './styles'
import { SlArrowLeft } from 'react-icons/sl'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Button } from '../../components/Button'
import { HiOutlineCreditCard } from 'react-icons/hi'
import Pix from '../../assets/layer1.svg'
import QrCode from '../../assets/qrcode 1.svg'
import Pag from '../../assets/Vector.svg'
import { FiClock } from 'react-icons/fi'
import { FiAlertTriangle } from 'react-icons/fi'
import { BsCheckCircle } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import { api } from "../../services/api"

export function MyRequest() {
  const [background, setBackground] = useState(true)
  const [backgroundTwo, setBackgroundTwo] = useState(true)
  const [button, setButton] = useState(true)
  const [request, setRequest] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    async function fetchRequests() {
      const response = await api.get("/request")
      setRequest(response.data.requests)
    }
    fetchRequests()
  }, [])

  let sum = 0
  for (var i = 0; i < request.length; i++) {
    sum = sum + (request[i]['price'] * request[i]['amount'])
  }

  async function handlePay() {
    if (sum == 0) {
      alert("Escolha algum item na página anterior para realizar o pagamento!")
      navigate("/")
      return
    }
    let details = []
    for (var i = 0; i < request.length; i++) {
      details.push(request[i]['amount'] + "x " + request[i]['name'])
    }

    let status = "🔴Pendente"

    await api.post("/allrequests", { status, details }).then(() => { alert("Pagamento finalizado com sucesso, pedido realizado com sucesso!") }).catch(error => { if (error.response) { alert(error.response.data.message) } else { alert("Não foi possível finalizar pagamento!") } })
    await api.delete("/request")
    navigate("/")
  }

  return (
    <Container>
      <Header />
      <main>
        <div className="columnOne">
        <ButtonText to="/"><SlArrowLeft />voltar para a Home</ButtonText>
          <h1>Meu pedido</h1>
          <div className="requests">
            {
              request.map(request => (
                <div className="request" key={String(request.id)}>
                  <img src={`${api.defaults.baseURL}/files/${request.image}`} alt="imagem do prato" />
                  <div className="Text">
                    <div className="text">
                      <span className="name">{request.amount}x {request.name}</span><span className="price">R$ {Number(request.price) * Number(request.amount)}</span>
                    </div>
                    <p>Excluir</p>
                  </div>
                </div>
              ))
            }
          </div>
          <h2>R$ {sum} </h2>
        </div>
        <div className="columnTwo">
          <h1 className="titleTwo">Pagamento</h1>
          <div className="headerTable">
            <div className={background ? "pix" : "pixTwo"} onClick={() => setBackground(!background)}>
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
                  <Button onClick={handlePay} ><img src={Pag} alt="pag" />Finalizar pagamento</Button>
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
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </Container>
  )
}