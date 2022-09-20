import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  padding: 1.2rem 1rem;
  border-bottom: 1px solid ${(props) => props.theme['gray-800']};
  background: ${(props) => props.theme['gray-900']};

  h2 {
    font-size: 2rem;
  }

  h2 span {
    color: ${(props) => props.theme['purple-700']};
  }

  nav ul {
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  nav ul a {
    color: ${(props) => props.theme['gray-50']};
    border-bottom: 2px solid transparent;
    padding-bottom: 0.5rem;
    transition: all 0.4s;

    &:hover {
      border-bottom: 2px solid ${(props) => props.theme['purple-700']};
    }
  }
`

export const WrapperContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
