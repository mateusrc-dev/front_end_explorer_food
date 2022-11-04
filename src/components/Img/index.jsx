import { Container } from './styles'
import Salada from '../../assets/saladaravanello.png'
import Tomate from '../../assets/tomate.png'
import Alface from '../../assets/alface.png'
import Rabanete from '../../assets/rabanete.png'
import pãonaan from '../../assets/pãonaan.png'
import ingredients from '../../assets/ingredients.webp'

export function Img({ imgName }) {
  if (imgName === "Salada") {
    return (
      <Container>
        <img src={Salada} alt="imagem da salada" />
      </Container>
    )
  } else if (imgName === "Tomate") {
    return (
      <Container>
        <img src={Tomate} alt="imagem da salada" />
      </Container>
    )
  } else if (imgName === "Alfate") {
    return (
      <Container>
        <img src={Alface} alt="imagem da salada" />
      </Container>
    )
  } else if (imgName === "Rabanete") {
    return (
      <Container>
        <img src={Rabanete} alt="imagem da salada" />
      </Container>
    )
  } else if (imgName === "pãonaan") {
    return (
      <Container>
        <img src={pãonaan} alt="imagem da salada" />
      </Container>
    )
  } else {
    return (
      <Container>

        <img className="img" src={ingredients} alt="imagem da salada" />
      </Container>
    )
  }
}