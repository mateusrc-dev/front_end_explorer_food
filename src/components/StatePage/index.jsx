import { Container } from './styles'
import { useStatePage } from '../../hooks/statePage'
import { FaLightbulb } from 'react-icons/fa'
import { FaRegLightbulb } from 'react-icons/fa'

export function StatePage({StatePage}) {
  const { handleStatesPages } = useStatePage()

  function handleState() {
    handleStatesPages(StatePage)
  }

  return (
    <Container>
      <div onClick={handleState} className="statePage">
        {StatePage ? <FaLightbulb className="svgState" /> : <FaRegLightbulb className="svgState" />}
      </div>
    </Container>
  )
}