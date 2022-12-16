import styled from 'styled-components'

export const CardContainer = styled.div`
    display: grid;
    width: 16rem;
    height: 19rem;
    left: 0;
    top: 0;
    border-radius: 6px 36px;
    background: ${({theme}) => theme.colors["background-card"]};
    margin-top: 3rem;

    img {
        margin: -2rem auto 0.2rem;
        display: flex;
        justify-content: center;
        text-align: center;
    }   
`

export const  CardSpecifications = styled.div`

    display: flex;
    gap: 0.25rem;
    width: 100%;
    justify-content: center ;

    span {
        max-width: 100%;
        background: ${({theme}) => theme.colors["yellow"]};
        border-radius: 6.25rem;       
        height: 21px;
        padding: 0.25rem 0.5rem;
        justify-content: center;
        text-align: center;

        font-size: 0.8rem;
        color: ${({theme}) => theme.colors["yellow-dark"]}; 
        text-transform: uppercase;
        line-height: 130%;
        font-weight: 700;
        
    }

`

export const CardTitle = styled.span`

    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 700;
    font-size: 1.2rem;
    line-height: 130%;
    text-align: center;

    justify-content: center;

    color: ${({theme}) => theme.colors["base-subtitle"]};
`

export const CardDescription = styled.span`

    padding: 0 1rem;
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 130%;

    text-align: center;

    color: ${({theme}) => theme.colors["gray-100"]};
`