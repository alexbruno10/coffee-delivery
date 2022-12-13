
import styled from 'styled-components'

export const CoffeeListContainer = styled.div`
  width: 100%;
  align-items: center;
  height: 6.5rem;
  justify-content: center;

  > span {
    margin-top: 2rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    max-width: 70rem;
    margin-right: auto;
    margin-left: auto;
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 800;
    font-size: 2rem;
    line-height: 130%;
  }

  > div {
    width: 100%;
    display: grid;
    justify-content: space-between;
    max-width: 70rem;
    margin-right: auto;
    margin-left: auto;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    row-gap: 1.25rem;
    text-align: center;
  }
` 