import { Container } from '../../styles/global'
import { AboutContainer, TextWrapper } from './styles'

export function About() {
  return (
    <AboutContainer>
      <Container>
        <TextWrapper>
          <h2>Sobre mim</h2>
          <p>
            Meu nome e Leonardo, sou desenvolvedor e UI Designer. Estou em
            constante desenvolvimento, para sempre conseguir entregar o melhor
            projeto possível ao cliente ou empresa. A dedicação e
            comprometimento fazem parte de mim.
          </p>
        </TextWrapper>
      </Container>
    </AboutContainer>
  )
}
