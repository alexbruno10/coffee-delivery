
import styled, { ThemeConsumer } from 'styled-components'

export const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  height: 34rem;
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

export const TitleFormat = styled.div`
    display: inline-block;

    >h2 {
        width: 36.75rem;
        height: 7.75rem;
        font-size: 3rem;
        font-weight: 800;
        font-style: normal;
        line-height: 130%;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
`

export const TitleIcons = styled.div`
width: 100%;
    display: inline-block;
    margin: 0 auto;
    padding-top: 4rem;
    align-items: flex-start;
`

export const FirstIcons = styled.div`
    display: flex;
`
export const SecondIcons = styled.div`
    display: flex;
`