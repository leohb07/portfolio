import styled from 'styled-components'

export const AboutContainer = styled.section`
  background: ${(props) => props.theme['gray-800']};
  padding: 9rem 1rem;
  text-align: center;
`

export const TextWrapper = styled.div`
  h2 {
    font-size: 1.5rem;
    margin-bottom: 1.4rem;
  }

  p {
    width: 45rem;
    margin: 0 auto;
    line-height: 1.6;
    color: ${(props) => props.theme['gray-300']};
  }
`
