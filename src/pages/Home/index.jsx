//import { useRef, useLayoutEffect } from 'react'
import { useState, useEffect } from "react"
import { api } from "../../services/api"
import { Footer } from '../../components/Footer'
import HomeImage from '../../assets/homeimage.png'
import Salada from '../../assets/saladaravanello.png'
import { RiSubtractFill } from 'react-icons/ri'
import { RiAddLine } from 'react-icons/ri'
import { Button } from '../../components/Button'
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

export function Home() {
  const [search, setSearch] = useState("")
  const [foods, setFoods] = useState([])
  const [request, setRequest] = useState([])


  useEffect(() => {
    async function fetchRequests() {
      const response = await api.get("/request")
      setRequest(response.data.requests)
    }
    fetchRequests()
  }, [])

  useEffect(() => {
    async function fetchFoods() {
      const response = await api.get(`/dishes/?name=${search}`)
      setFoods(response.data.dishes)
    }
    fetchFoods()
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

  return (
    <Container>
      <Header>
        <div className="logo">
          <BsFillHexagonFill />
          <span>food explorer</span>
        </div>
        <div className="gap">
          <Link to="/myfavorites"><a>Meus favoritos</a></Link>
          <Input >
            <BiSearchAlt />
            <input type="text" placeholder="Busque pelas suas opções de prato" onChange={e => setSearch(e.target.value)} />
          </Input>
          <div className="buttons">
            <Link to="/myrequest">
              <ButtonTwo>
                <CgNotes />Meu pedido atual ({request.length})
              </ButtonTwo>
            </Link>
            <Link to="/requests">
              <ButtonTwo>
                <CgNotes />Todos os meus pedidos (0)
              </ButtonTwo>
            </Link>
          </div>
        </div>
        <Logout onClick={signOut}>
          <FiLogOut />
        </Logout>
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
                    <img src={`${api.defaults.baseURL}/files/${food.image}`} alt="imagem do prato" />
                    <Link to={`/details/${food.id}`}><a><h2>{food.name}<BiChevronRight /></h2></a></Link>
                    <p>{food.description}</p>
                    <span className="price">R$ {food.price}</span>
                    <div className="amountAndButton">
                      <AmountAndButtonInclude image={food.image} price={food.price} name={food.name} />

                    </div>
                    <Favorite dish_id={food.id} />
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
              <div className="cardFood" >
                <img src={Salada} alt="imagem do prato" />
                <h2>Salada Ravanello<BiChevronRight /></h2>
                <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim</p>
                <span className="price">R$ 25,97</span>
                <div className="amountAndButton">
                  <span className="amount"><a><RiSubtractFill /></a> 01 <a><RiAddLine /></a></span>
                  <Button>
                    <CgNotes />
                    incluir
                  </Button>
                </div>
              </div>
              <div className="cardFood" >
                <img src={Salada} alt="imagem do prato" />
                <h2>Salada Ravanello<BiChevronRight /></h2>
                <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim</p>
                <span className="price">R$ 25,97</span>
                <div className="amountAndButton">
                  <span className="amount"><a><RiSubtractFill /></a> 01 <a><RiAddLine /></a></span>
                  <Button>
                    <CgNotes />
                    incluir
                  </Button>
                </div>
              </div>
              <div className="cardFood" >
                <img src={Salada} alt="imagem do prato" />
                <h2>Salada Ravanello<BiChevronRight /></h2>
                <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim</p>
                <span className="price">R$ 25,97</span>
                <div className="amountAndButton">
                  <span className="amount"><a><RiSubtractFill /></a> 01 <a><RiAddLine /></a></span>
                  <Button>
                    <CgNotes />
                    incluir
                  </Button>
                </div>
              </div>
              <div className="cardFood" >
                <img src={Salada} alt="imagem do prato" />
                <h2>Salada Ravanello<BiChevronRight /></h2>
                <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim</p>
                <span className="price">R$ 25,97</span>
                <div className="amountAndButton">
                  <span className="amount"><a><RiSubtractFill /></a> 01 <a><RiAddLine /></a></span>
                  <Button>
                    <CgNotes />
                    incluir
                  </Button>
                </div>
              </div>
              <div className="cardFood" >
                <img src={Salada} alt="imagem do prato" />
                <h2>Salada Ravanello<BiChevronRight /></h2>
                <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim</p>
                <span className="price">R$ 25,97</span>
                <div className="amountAndButton">
                  <span className="amount"><a><RiSubtractFill /></a> 01 <a><RiAddLine /></a></span>
                  <Button>
                    <CgNotes />
                    incluir
                  </Button>
                </div>
              </div>
              <div className="cardFood" >
                <img src={Salada} alt="imagem do prato" />
                <h2>Salada Ravanello<BiChevronRight /></h2>
                <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim</p>
                <span className="price">R$ 25,97</span>
                <div className="amountAndButton">
                  <span className="amount"><a><RiSubtractFill /></a> 01 <a><RiAddLine /></a></span>
                  <Button>
                    <CgNotes />
                    incluir
                  </Button>
                </div>
              </div>
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
              <div className="cardFood" >
                <img src={Salada} alt="imagem do prato" />
                <h2>Salada Ravanello<BiChevronRight /></h2>
                <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim</p>
                <span className="price">R$ 25,97</span>
                <div className="amountAndButton">
                  <span className="amount"><a><RiSubtractFill /></a> 01 <a><RiAddLine /></a></span>
                  <Button>
                    <CgNotes />
                    incluir
                  </Button>
                </div>
              </div>
              <div className="cardFood" >
                <img src={Salada} alt="imagem do prato" />
                <h2>Salada Ravanello<BiChevronRight /></h2>
                <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim</p>
                <span className="price">R$ 25,97</span>
                <div className="amountAndButton">
                  <span className="amount"><a><RiSubtractFill /></a> 01 <a><RiAddLine /></a></span>
                  <Button>
                    <CgNotes />
                    incluir
                  </Button>
                </div>
              </div>
              <div className="cardFood" >
                <img src={Salada} alt="imagem do prato" />
                <h2>Salada Ravanello<BiChevronRight /></h2>
                <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim</p>
                <span className="price">R$ 25,97</span>
                <div className="amountAndButton">
                  <span className="amount"><a><RiSubtractFill /></a> 01 <a><RiAddLine /></a></span>
                  <Button>
                    <CgNotes />
                    incluir
                  </Button>
                </div>
              </div>
              <div className="cardFood" >
                <img src={Salada} alt="imagem do prato" />
                <h2>Salada Ravanello<BiChevronRight /></h2>
                <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim</p>
                <span className="price">R$ 25,97</span>
                <div className="amountAndButton">
                  <span className="amount"><a><RiSubtractFill /></a> 01 <a><RiAddLine /></a></span>
                  <Button>
                    <CgNotes />
                    incluir
                  </Button>
                </div>
              </div>
              <div className="cardFood" >
                <img src={Salada} alt="imagem do prato" />
                <h2>Salada Ravanello<BiChevronRight /></h2>
                <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim</p>
                <span className="price">R$ 25,97</span>
                <div className="amountAndButton">
                  <span className="amount"><a><RiSubtractFill /></a> 01 <a><RiAddLine /></a></span>
                  <Button>
                    <CgNotes />
                    incluir
                  </Button>
                </div>
              </div>
              <div className="cardFood" >
                <img src={Salada} alt="imagem do prato" />
                <h2>Salada Ravanello<BiChevronRight /></h2>
                <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim</p>
                <span className="price">R$ 25,97</span>
                <div className="amountAndButton">
                  <span className="amount"><a><RiSubtractFill /></a> 01 <a><RiAddLine /></a></span>
                  <Button>
                    <CgNotes />
                    incluir
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </Container>
  )
}


