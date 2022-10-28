//import { useRef, useLayoutEffect } from 'react'
import { Container } from './styles'
import { Header } from '../../components/Header'
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

export function Home() {
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

  return (
    <Container>
      <Header />
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


