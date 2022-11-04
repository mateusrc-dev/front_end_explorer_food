import { Container, Main, ButtonText } from './styles'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { SlArrowLeft } from 'react-icons/sl'
import { useState, useEffect } from "react"
import { api } from "../../services/api"
import { useParams } from 'react-router-dom'
import { AmountAndButtonInclude } from '../../components/AmountAndButtonInclude'
import { Img } from '../../components/Img'

export function DetailsDrinks() {
  const [data, setData] = useState({})
  const [ingredients, setIngredients] = useState([])
  const params = useParams()

  console.log(ingredients)
  useEffect(() => {
    async function fetchFood() {
      const response = await api.get(`/drinks/${params.id}`)
      setData(response.data)
      setIngredients(response.data.ingredients)
    }
    fetchFood()
  }, [])

  return (
    <Container>
      <Header />
      <ButtonText to="/"><SlArrowLeft />voltar</ButtonText>
      <Main>
        <div className="image">
          <img src={`${api.defaults.baseURL}/files/${data.image}`} alt="foto do prato" />
        </div>
        <div className="textDetails">
          <h1>{data.name}</h1>
          <p>{data.description}</p>
          <div className="ingredients">
            {
              ingredients.map(ingredient => (
                <span>
                  <Img imgName={ingredient.name}/>
                  {ingredient.name}
                </span>
              ))
            }
          </div>
          <div className="finishBuy">
            <span className="price">R$ {data.price}</span>
            <AmountAndButtonInclude image={data.image} price={data.price} name={data.name} />
          </div>
        </div>
      </Main>
      <Footer />
    </Container>
  )
}