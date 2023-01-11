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
    width: 100%;
    gap: 6.25rem;
`