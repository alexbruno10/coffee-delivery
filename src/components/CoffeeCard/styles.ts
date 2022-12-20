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

export const CardFooter = styled.div`

    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0px;
    margin: 0 1.5rem 1.0rem 1.5rem;

`

export const CardFooterQtd = styled.div`

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    gap: 0.25rem;

    width: 4.5rem;
    height: 2.3rem;

    border-radius: 0.37rem;
    background: ${({theme}) => theme.colors["base-gray"]};

    flex: none;
    order: 0;
    flex-grow: 0;

    gap: 0.7rem;
`

export const CardPlusMinusButton = styled.button`
    display: flex;
    border: none;
    background: ${({theme}) => theme.colors["base-gray"]};
    color: ${({theme}) => theme.colors["purple"]};
`

export const CardPrice = styled.span`
    font-family: 'Baloo 2';
    font-size: 1.5rem;
    font-weight: 800;
    color: ${({theme}) => theme.colors["gray-500"]};
`

export const CardCart = styled.button`
    
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background: ${({theme}) => theme.colors["purple-dark"]};
    color: ${({theme}) => theme.colors["white"]};
    height: 2.37rem;
    width: 2.37rem;
    border-radius: 0.37rem;
    border: none;

    &:hover {
        filter: brightness(0.7);
    }

`



