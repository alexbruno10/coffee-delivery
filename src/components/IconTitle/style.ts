import styled from 'styled-components'

export const IconContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;
`

interface IconBgProps {
    color: string   
}

export const IconBgContainer = styled.div<IconBgProps>`
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    align-items: center;
    justify-content: center;

    background: ${({color}) => color};
    color: ${({theme}) => theme.colors["white"]};
    display: flex;
    align-items: center;
    justify-content: center;
`
