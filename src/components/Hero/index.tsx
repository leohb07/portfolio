import { Container } from '../../styles/global'
import {
  AboutWrapper,
  HeroContainer,
  ImageWrapper,
  Links,
  TextWrapper,
} from './styles'

import imageHero from '../../assets/man.svg'

export function Hero() {
  return (
    <HeroContainer>
      <Container>
        <AboutWrapper>
          <TextWrapper>
            <h1>
              Olá, eu sou <br />
              <strong>Leonardo Barrocal</strong>
            </h1>
            <span>Desenvolvedor Front-End & UI Designer</span>
            <Links>
              <a
                href="https://www.linkedin.com/in/leonardobarrocal/"
                target="_blank"
                rel="noreferrer"
              >
                Entrar em contato
              </a>
            </Links>
          </TextWrapper>
          <ImageWrapper>
            <img
              src={imageHero}
              alt="Imagem de um boneco segurando um celular"
              width={450}
              height={450}
            />
          </ImageWrapper>
        </AboutWrapper>
      </Container>
    </HeroContainer>
  )
}
