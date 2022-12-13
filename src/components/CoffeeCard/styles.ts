import styled from 'styled-components'

export const CardContainer = styled.div`
    width: 16rem;
    height: 19rem;
    left: 0;
    top: 0;
    border-radius: 6px 36px;
    background: ${({theme}) => theme.colors["background-card"]};
    margin-top: 3rem;

    img {
        margin-top: -2rem;
    }

    > div {
        background-image: ${() => `url(http://localhost:5173/src/assets/coffee/arabe.svg)`};
    }
    
`