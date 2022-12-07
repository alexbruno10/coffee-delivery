import styled, { ThemeConsumer } from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  height: 6.5rem;
  background: ${(props) => props.theme['background']};
  justify-content: center;

  > div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    max-width: 70rem;
    margin-right: auto;
    margin-left: auto;
  }
`
export const HeaderButtons = styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;
    width: 20rem;
`
export const HeaderButtonLocal = styled.button`
    display: flex;
    align-items: center;
    width: 18rem;
    justify-content: center;
    gap: 0.25rem;
    min-width: 2.3rem;
    height: 2.3rem;
    border-radius: 0.6rem;
    border: none;
    padding: 0 0.5rem;
    position: relative;
    background: ${(props) => props.theme['purple-100']};
    font-size: small;
`