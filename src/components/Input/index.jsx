import { Container } from './styles'

export function Input({placeholder, children}) {
  return (
    <Container>
      
      {children}
      <input type="text" placeholder={placeholder}/>
    </Container>
  )
}