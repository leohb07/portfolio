import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ul, ol {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  body {
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-weight: 400;
    background: ${(props) => props.theme['gray-900']};
    color: ${(props) => props.theme['gray-50']};
  }
`
export const Container = styled.div`
  width: 100%;
  max-width: 74rem;
  margin: 0 auto;
`
