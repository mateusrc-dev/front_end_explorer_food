import { useState } from 'react'
import { api } from "../../services/api"
import { useNavigate } from "react-router-dom"
import { Container, ButtonText, Main } from './styles'
import { SlArrowLeft } from 'react-icons/sl'
import { HeaderTwo } from '../../components/HeaderTwo'
import { Footer } from '../../components/Footer'
import { FiUpload } from 'react-icons/fi'
import { IngredientItem } from '../../components/IngredientItem'
import { Link } from 'react-router-dom'

export function EditDish() {
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState("")
  const [ingredients, setIngredients] = useState([])
  const [newIngredient, setNewIngredient] = useState("")
  const [file, setFile] = useState(null)
  const navigate = useNavigate()

  function handleAddIngredient() {
    setIngredients(prevState => [...prevState, newIngredient])
    setNewIngredient("")
  }
  function handleRemoveIngredient(deleted) {
    setIngredients(prevState => prevState.filter(ingredient => ingredient !== deleted))
  }

  function handleImage(event) {
    const file = event.target.files[0]
    setFile(file)
  }

  async function handleNewDish() {
    if (!name) {
      return alert("Digite um nome!")
    }
    if (newIngredient) {
      return alert("Você deixou um ingrediente no campo para adicionar e não clicou em adicionar. Clique para adicionar ou deixe o campo vazio!")
    }
    if (!description) {
      return alert("Escreva algo na descrição!")
    }
    if (!price) {
      return alert("Coloque o preço!")
    }
    if (!file) {
      return alert("Escolha uma imagem!")
    }
    if (ingredients.length == 0) {
      return alert("Adicione algum ingrediente!")
    }
    const formData = new FormData()
    formData.append("name", name)
    formData.append("description", description)
    formData.append("price", price)
    formData.append("ingredients", ingredients)
    formData.append("image", file)
    await api.post("/dishes", formData).then(() => { alert("Prato cadastrado com sucesso"); navigate("/adm") }).catch(error => { if (error.response) { alert(error.response.data.message) } else { alert("Não foi possível cadastrar!") } })

  }
  return (
    <Container>
      <HeaderTwo />
      <Link to="/adm">
        <ButtonText><SlArrowLeft />voltar</ButtonText>
      </Link>
      <Main>
        <h1>Editar prato</h1>
        <div className="imageAndNameDish">
          <div className="imagedish">
            <p>Imagem do prato</p>
            <label htmlFor="imagedish"><FiUpload />Selecione imagem</label>
            <input type="file" id="imagedish" onChange={(event) => handleImage(event)} />
          </div>
          <div className="namedish">
            <label htmlFor="namedish">Nome</label>
            <input type="text" id="namedish" placeholder="Ex.: Salada Ceasar" onChange={e => setName(e.target.value)} />
          </div>
        </div>
        <div className="ingredientsAndPriceDish">
          <div className="ingredients">
            <p>Ingredientes</p>
            <div className="box">
              {
                ingredients.map((ingredient, index) => (
                  <IngredientItem key={String(index)} value={ingredient} onClick={() => { handleRemoveIngredient(ingredient) }} />
                ))
              }
              <IngredientItem placeholder="Adicionar" isNew value={newIngredient} onChange={e => setNewIngredient(e.target.value)} onClick={handleAddIngredient} />
            </div>
          </div>
          <div className="price">
            <label htmlFor="price">Preço</label>
            <input type="text" id="price" placeholder="R$ 00,00" onChange={e => setPrice(e.target.value)} />
          </div>
        </div>
        <div className="textarea">
          <p>Descrição</p>
          <textarea placeholder="Fale brevemente sobre o prato, seus ingredientes e composição" onChange={e => setDescription(e.target.value)} />
        </div>
        <div className="button">
          <button className="addrequest" onClick={(e) => handleNewDish(e)}>
            Adicionar pedido
          </button>
        </div>
      </Main>
      <Footer />
    </Container >
  )
}