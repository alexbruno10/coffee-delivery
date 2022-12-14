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