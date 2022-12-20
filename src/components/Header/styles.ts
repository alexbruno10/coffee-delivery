
import styled, { ThemeConsumer } from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  height: 6.5rem;
  background: ${(props) => props.theme.colors['background']};
  justify-content: center;
  position: sticky;
  z-index: 5;
  top: 0;
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
    width: 11rem;
`
export const HeaderButtonLocal = styled.button`
    display: flex;
    align-items: center;
    width: 19rem;
    justify-content: center;
    gap: 0.25rem;
    min-width: 2.3rem;
    height: 2.3rem; 
    border-radius: 0.6rem;
    border: none;
    padding: 0 0.5rem;
    position: relative;
    background: ${(props) => props.theme.colors['purple-300']};
    color: ${(props) => props.theme.colors['purple']};
    font-size: small;

    &:hover {
      filter: brightness(0.9);
    }
`

export const HeaderButtonCart = styled.button`
    display: flex;
    align-items: center;
    width: 1rem;
    justify-content: center;
    gap: 0.25rem;
    min-width: 2.3rem;
    height: 2.3rem;
    border-radius: 0.6rem;
    border: none;
    padding: 0 0.5rem;
    position: relative;
    background: ${(props) => props.theme.colors['yellow']};
    color: ${(props) => props.theme.colors['yellow-dark']};
    font-size: small;

    &:hover {
      filter: brightness(0.9);
    }
`