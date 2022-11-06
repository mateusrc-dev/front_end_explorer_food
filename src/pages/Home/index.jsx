import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from "react"
import { api } from "../../services/api"
import { Footer } from '../../components/Footer'
import HomeImage from '../../assets/homeimage.png'
import { CgNotes } from 'react-icons/cg'
import { BiChevronRight } from 'react-icons/bi'
import { IoIosArrowBack } from 'react-icons/io'
import { IoIosArrowForward } from 'react-icons/io'
import { useRef } from 'react'
import { BsFillHexagonFill } from 'react-icons/bs'
import { FiLogOut } from 'react-icons/fi'
import { Container, Logout, Header, Input } from './styles'
import { ButtonTwo } from '../../components/ButtonTwo'
import { BiSearchAlt } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { useAuth } from '../../hooks/auth'
import { AmountAndButtonInclude } from '../../components/AmountAndButtonInclude'
import { Favorite } from '../../components/Favorite'
import { FavoriteDesserts } from '../../components/FavoriteDesserts'
import { FavoriteDrinks } from '../../components/FavoriteDrinks'

export function Home() {
  const [search, setSearch] = useState("")
  const [foods, setFoods] = useState([])
  const [foodsDrinks, setFoodsDrinks] = useState([])
  const [foodsDesserts, setFoodsDesserts] = useState([])
  const [requests, setRequests] = useState([])
  const [request, setRequest] = useState([])


  useEffect(() => {
    async function fetchRequests() {
      const response = await api.get("/allrequests")
      setRequest(response.data.allRequests)
    }
    fetchRequests()
  }, [request])

  useEffect(() => {
    async function fetchRequests() {
      const response = await api.get("/request")
      setRequests(response.data.requests)
    }
    fetchRequests()
  }, [requests])

  useEffect(() => {
    async function fetchFoods() {
      const response = await api.get(`/dishes/?name=${search}`)
      setFoods(response.data.dishes)
    }
    fetchFoods()
  }, [search])

  useEffect(() => {
    async function fetchFoodsDrinks() {
      const response = await api.get(`/drinks/?name=${search}`)
      setFoodsDrinks(response.data.drinks)
    }
    fetchFoodsDrinks()
  }, [search])

  useEffect(() => {
    async function fetchFoodsDesserts() {
      const response = await api.get(`/desserts/?name=${search}`)
      setFoodsDesserts(response.data.desserts)
    }
    fetchFoodsDesserts()
  }, [search])

  const carousel = useRef(null)
  const carouselTwo = useRef(null)
  const carouselThree = useRef(null)

  const handleLeftClick = (e) => {
    e.preventDefault()
    console.log(carousel.current)
    carousel.current.scrollLeft -= carousel.current.offsetWidth
  }

  const handleRightClick = (e) => {
    e.preventDefault()
    carousel.current.scrollLeft += carousel.current.offsetWidth
  }

  const handleLeftClickTwo = (e) => {
    e.preventDefault()
    console.log(carousel.current)
    carouselTwo.current.scrollLeft -= carouselTwo.current.offsetWidth
  }

  const handleRightClickTwo = (e) => {
    e.preventDefault()
    carouselTwo.current.scrollLeft += carouselTwo.current.offsetWidth
  }

  const handleLeftClickThree = (e) => {
    e.preventDefault()
    console.log(carousel.current)
    carouselThree.current.scrollLeft -= carouselThree.current.offsetWidth
  }

  const handleRightClickThree = (e) => {
    e.preventDefault()
    carouselThree.current.scrollLeft += carouselThree.current.offsetWidth
  }

  const { signOut } = useAuth()
  const navigate = useNavigate()

  function handleSignOut() {
    navigate("/")
    signOut()
  }

  return (
    <Container>
      <Header>
        <div className="logo">
          <BsFillHexagonFill className="hexagon" />
          <span>food explorer</span>
          <Link className="favorites" to="/myfavorites">Meus favoritos</Link>
          <Input className="input" >
            <BiSearchAlt className="inputSvg" />
            <input type="text"  placeholder="Busque pelas suas refeições" onChange={e => setSearch(e.target.value)} />
          </Input>
        </div>
        <div className="buttons">
          <Link to="/myrequest">
            <ButtonTwo>
              <CgNotes />Meu pedido atual ({requests.length})
            </ButtonTwo>
          </Link>
          <Link to="/requests">
            <ButtonTwo>
              <CgNotes />Todos os meus pedidos ({request.length})
            </ButtonTwo>
          </Link>
          <Logout onClick={handleSignOut} className="back"  >
            <FiLogOut />
          </Logout>
        </div>

      </Header>

      <main>
        <div className="logoHome">
          <img src={HomeImage} alt="imagem da home" />
          <div className="logoText">
            <h1>Sabores inigualáveis </ h1>
            <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
          </div>
        </div>
        <h2 id="title">Pratos principais</h2>
        <div className="container">
          <div className="arrowOne" onClick={handleLeftClick}>
            <button ><IoIosArrowBack /></button>
          </div>
          <div className="arrowTwo" onClick={handleRightClick}>
            <button ><IoIosArrowForward /></button>
          </div>
          <div ref={carousel} className="listFood">
            <div className="listFoods">
              {
                foods.map(food => (
                  <div className="cardFood" key={String(food.id)} >
                    <Favorite dish_id={food.id} />
                    <img src={`${api.defaults.baseURL}/files/${food.image}`} alt="imagem do prato" />
                    <Link to={`/details/${food.id}`}><a><h2>{food.name}<BiChevronRight /></h2></a></Link>
                    <div className="description"><p>{food.description}</p></div>
                    <span className="price">R$ {String(Number(food.price).toFixed(2)).replace(".", ",")} </span>
                    <div className="amountAndButton">
                      <AmountAndButtonInclude image={food.image} price={food.price} name={food.name} />
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
        <h2 id="title">Sobremesas</h2>
        <div className="container">
          <div className="arrowOne" onClick={handleLeftClickTwo}>
            <button ><IoIosArrowBack /></button>
          </div>
          <div className="arrowTwo" onClick={handleRightClickTwo}>
            <button ><IoIosArrowForward /></button>
          </div>
          <div ref={carouselTwo} className="listFood">
            <div className="listFoods">
              {
                foodsDesserts.map(food => (
                  <div className="cardFood" key={String(food.id)} >
                    <FavoriteDesserts dessert_id={food.id} />
                    <img src={`${api.defaults.baseURL}/files/${food.image}`} alt="imagem do prato" />
                    <Link to={`/detailsdesserts/${food.id}`}><a><h2>{food.name}<BiChevronRight /></h2></a></Link>
                    <p>{food.description}</p>
                    <span className="price">R$ {String(Number(food.price).toFixed(2)).replace(".", ",")}</span>
                    <div className="amountAndButton">
                      <AmountAndButtonInclude image={food.image} price={food.price} name={food.name} />
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
        <h2 id="title">Bebidas</h2>
        <div className="container">
          <div className="arrowOne" onClick={handleLeftClickThree}>
            <button ><IoIosArrowBack /></button>
          </div>
          <div className="arrowTwo" onClick={handleRightClickThree}>
            <button ><IoIosArrowForward /></button>
          </div>
          <div ref={carouselThree} className="listFood">
            <div className="listFoods">
              {
                foodsDrinks.map(food => (
                  <div className="cardFood" key={String(food.id)} >
                    <FavoriteDrinks drink_id={food.id} />
                    <img src={`${api.defaults.baseURL}/files/${food.image}`} alt="imagem do prato" />
                    <Link to={`/detailsdrinks/${food.id}`}><a><h2>{food.name}<BiChevronRight /></h2></a></Link>
                    <p>{food.description}</p>
                    <span className="price">R$ {String(Number(food.price).toFixed(2)).replace(".", ",")}</span>
                    <div className="amountAndButton">
                      <AmountAndButtonInclude image={food.image} price={food.price} name={food.name} />
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </Container>
  )
}


