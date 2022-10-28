import { Container, Main, ButtonText } from './styles'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { CgNotes } from 'react-icons/cg'
import { RiSubtractFill } from 'react-icons/ri'
import { RiAddLine } from 'react-icons/ri'
import { SlArrowLeft } from 'react-icons/sl'
import Salada from '../../assets/saladaravanello.png'
import Tomate from '../../assets/tomate.png'
import Alface from '../../assets/alface.png'
import Rabanete from '../../assets/rabanete.png'
import PãoNaan from '../../assets/pãonaan.png'



export function Details() {

  return (
    <Container>
      <Header />
      <ButtonText> <SlArrowLeft />voltar</ButtonText>
      <Main>

        <div className="image">
          <img src={Salada} alt="foto do prato" />
        </div>
        <div className="textDetails">
          <h1>Salada Ravanello</h1>
          <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim</p>
          <div className="ingredients">
            <span><img src={Alface} alt="foto do alface" />alface</span>
            <span><img src={Tomate} alt="foto do tomate" />tomate</span>
            <span><img src={Rabanete} alt="foto do rabanete" />rabanete</span>
            <span><img src={PãoNaan} alt="foto do pão naan" />pão naan</span>
          </div>
          <div className="finishBuy">
            <span className="price">R$ 25,97</span>
            <span className="amount"><a><RiSubtractFill /></a> 01 <a><RiAddLine /></a></span>
            <Button>
              <CgNotes />
              incluir
            </Button>
          </div>
        </div>
      </Main>
      <Footer />
    </Container>
  )
}