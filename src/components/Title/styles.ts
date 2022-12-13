
import styled, { ThemeConsumer } from 'styled-components'
import introBackground from '../../assets/intro-background.png'

export const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  height: 34rem;
  background: ${() => `url(${introBackground})`};
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
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 1.25rem;
    margin-top: 4.125rem;
`