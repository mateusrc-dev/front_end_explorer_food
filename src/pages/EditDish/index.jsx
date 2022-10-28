import { Container, ButtonText, Main } from './styles'
import { SlArrowLeft } from 'react-icons/sl'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { FiUpload } from 'react-icons/fi'
import { AiOutlineClose } from 'react-icons/ai'
import { MdAdd } from 'react-icons/md'

export function EditDish() {
  return (
    <Container>
      <Header />
      <ButtonText><SlArrowLeft />voltar</ButtonText>
      <Main>
        <h1>Editar prato</h1>
        <div className="imageAndNameDish">
          <div className="imagedish">
            <p>Imagem do prato</p>
            <label htmlFor="imagedish"><FiUpload />Selecione imagem</label>
            <input type="file" id="imagedish" />
          </div>
          <div className="namedish">
            <label htmlFor="namedish">Nome</label>
            <input type="text" id="namedish" placeholder="Ex.: Salada Ceasar" />
          </div>
        </div>
        <div className="ingredientsAndPriceDish">
          <div className="ingredients">
            <p>Ingredientes</p>
            <div className="box">
              <div className="ingredient">
                <span>Pão Naan</span><button><AiOutlineClose /></button>
              </div>
              <div className="add">
                <span>Adicionar</span><button><MdAdd /></button>
              </div>
            </div>
          </div>
          <div className="price">
            <label htmlFor="price">Nome</label>
            <input type="text" id="price" placeholder="R$ 00,00" />
          </div>
        </div>
        <div className="textarea">
          <p>Descrição</p>
          <textarea placeholder="Fale brevemente sobre o prato, seus ingredientes e composição" />
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