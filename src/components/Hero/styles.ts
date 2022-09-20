import styled from 'styled-components'

export const HeroContainer = styled.section`
  width: 100%;
  padding: 9rem 1rem;
  height: 90vh;
  display: flex;
  align-items: center;
`
export const AboutWrapper = styled.div`
  padding-top: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const TextWrapper = styled.div`
  h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  h1 > strong {
    font-size: 2.8rem;
  }

  span {
    color: ${(props) => props.theme['gray-600']};
    display: block;
    margin-bottom: 1rem;
  }
`
export const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  a {
    outline: 0;
    border: none;
    color: ${(props) => props.theme['gray-100']};
    background: ${(props) => props.theme['purple-800']};
    padding: 0.65rem 2rem;
    border-radius: 8px;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.8;
    }
  }
`

export const ImageWrapper = styled.div``
