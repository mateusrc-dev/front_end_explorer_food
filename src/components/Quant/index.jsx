import { Container } from './styles'
import { RiSubtractFill } from 'react-icons/ri'
import { RiAddLine } from 'react-icons/ri'
import { useState } from "react"

export function Quant() {
  const [quant, setQuant] = useState(0)
  function handleAmountSum() {
    setQuant(prevState => Number(prevState) + 1)
  }
  function handleAmountSub() {
    if (quant == 0) {
      return
    } else {
      setQuant(prevState => Number(prevState) - 1)
    }
  }
  return (
    <Container>
      <span className="amount"><a><RiSubtractFill onClick={handleAmountSub} /></a> {quant} <a><RiAddLine onClick={handleAmountSum} /></a></span>
    </Container>
  )
}