import { Container } from '../../styles/global'
import { HeaderContainer, WrapperContent } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <Container>
        <WrapperContent>
          <h2>
            Leon<span>@</span>rdo
          </h2>
          <nav>
            <ul>
              <li>
                <a href="#">Sobre mim</a>
              </li>
              <li>
                <a href="#">Projetos</a>
              </li>
              <li>
                <a href="#">Serviços</a>
              </li>
              <li>
                <a href="#">Minhas skills</a>
              </li>
            </ul>
          </nav>
        </WrapperContent>
      </Container>
    </HeaderContainer>
  )
}
