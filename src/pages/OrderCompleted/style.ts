import styled from 'styled-components'

export const CompletedOrderContainer = styled.div`
    width: 70rem;
    margin-top: 2.5rem;
    margin-left: auto;
    margin-right: auto;
    gap: 2rem;
`

export const CompletedOrderTitle = styled.span`
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 800;
    font-size: 2rem;
    line-height: 130%;
    color: ${({theme}) => theme.colors["yellow-dark"]};
`

export const CompletedOrderSubTitle = styled.div`

    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 130%;

    color: ${({theme}) => theme.colors["base-subtitle"]};;
    font-stretch: 100;

`

export const CompletedOrderContent = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding-top: 2.5rem;

    img {
        height: 17.5rem;
    }
`

export const CompletedOrderContentInfo = styled.div`

    padding: 40px;
    gap: 32px;

    width: 32.87rem;
    height: 16.87rem;
    left: calc(50% - 526px/2 - 297px);
    top: 296px;

    border: 2px solid transparent;
    border-radius: 6px 36px;
    background-image: linear-gradient(white, white), radial-gradient(circle at top left, #DBAC2C, #8047F8);
    background-origin: border-box;
    background-clip: padding-box, border-box;

`

