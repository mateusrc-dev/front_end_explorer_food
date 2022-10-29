import { Container, ButtonText, Main } from './styles'
import { SlArrowLeft } from 'react-icons/sl'
import { HeaderTwo } from '../../components/HeaderTwo'
import { Footer } from '../../components/Footer'
import { FiUpload } from 'react-icons/fi'
import { IngredientItem } from '../../components/IngredientItem'
import { Link } from 'react-router-dom'

export function EditDrinks() {
  return (
    <Container>
      <HeaderTwo />
      <Link to="/homeadm">
        <ButtonText><SlArrowLeft />voltar</ButtonText>
      </Link>
      <Main>
        <h1>Editar bebida</h1>
        <div className="imageAndNameDish">
          <div className="imagedish">
            <p>Imagem da bebida</p>
            <label htmlFor="imagedish"><FiUpload />Selecione imagem</label>
            <input type="file" id="imagedish" />
          </div>
          <div className="namedish">
            <label htmlFor="namedish">Nome</label>
            <input type="text" id="namedish" placeholder="Ex.: Espresso" />
          </div>
        </div>
        <div className="ingredientsAndPriceDish">
          <div className="ingredients">
            <p>Ingredientes</p>
            <div className="box">
              <IngredientItem value="Café" />
              <IngredientItem placeholder="Adicionar" isNew />
            </div>
          </div>
          <div className="price">
            <label htmlFor="price">Preço</label>
            <input type="text" id="price" placeholder="R$ 00,00" />
          </div>
        </div>
        <div className="textarea">
          <p>Descrição</p>
          <textarea placeholder="Fale brevemente sobre sua bebida, seus ingredientes e composição" />
        </div>
        <div className="button">
          <button className="addrequest">
            Adicionar pedido
          </button>
        </div>
      </Main>
      <Footer />
    </Container >
  )
}