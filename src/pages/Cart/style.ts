import styled from 'styled-components'

export const CartContainer = styled.div`
    display: flex;
    width: 70rem;
    margin-top: 2.5rem;
    margin-left: auto;
    margin-right: auto;
    gap: 2rem;
    padding-bottom: 9.53rem;
`
export const CartTitleRequest = styled.span`

    width: 170px;
    height: 23px;

    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 130%;

    display: flex;
    align-items: center;

    /* Base/Subtitle */

    color: #403937;
`

export const CartForm = styled.div`
    
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 0.75rem;

    width: 40rem;
    height: 36.96rem;

`

export const CartFormAddress = styled.div`

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 2.5rem;
    gap: 2rem;

    width: 40rem;
    height: 23.25rem;

    background: ${({theme}) => theme.colors["background-card"]};
    border-radius: 0.375rem;

    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
    margin-top: 0.9rem;

`

export const CartMethodPay = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 2.5rem;
    gap: 2rem;

    width: 40rem;
    height: 12.93rem;

    background: ${({theme}) => theme.colors["background-card"]};
    border-radius: 0.375rem;

    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
`

export const CartConfirmRequest = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 2.5rem;
    gap: 2rem;

    width: 28rem;
    height: 31.12rem;

    background: ${({theme}) => theme.colors["background-card"]};
    border-radius: 0.375rem 2.75rem;
    margin-top: 0.9rem;
`

interface TitleProps {

    color: 'yellow' | 'purple';
}

const colors = {
    yellow: '#C47F17',
    purple: '#8047F8'
}

export const CartTitleForm = styled.div<TitleProps>`

    padding: 0px;
    gap: 0.5rem;

    width: 35rem;
    height: 2.75rem;

    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
    margin-left: 0.25rem;
    margin-top: 0.1rem;
    margin-right: 1rem;

    >p {
        display: flex;
        font-weight: 400;
        color: ${({theme}) => theme.colors["base-subtitle"]};
        gap: 0.5rem;

        svg {
            color: ${(props) => colors[props.color]};
        }
    }

    span {
        font-size: 0.875rem;
        color: ${({theme}) => theme.colors["base-subtitle"]};
        padding-left: 2rem;
    }
`

interface InputProps {
    bg: string;
}


export const CartInputAddress = styled.input<InputProps>`
    /* background-color:   ${(props) => props.bg}; */
    grid-template-columns: ${(props) => props.bg};
`

export const AddressFormContainer = styled.div`
    width: 35rem;
    height: 13.5rem;
    display: grid;
    padding: 0;
    grid-template-columns: 12.5rem 17.25rem 3.75rem;
    column-gap: 0.75rem;
    row-gap: 1rem;
    grid-auto-flow: dense;
    margin-left: 0.25rem;
    
    input {
        background: ${({theme}) => theme.colors["base-input"]};
        border: 1px solid ${({theme}) => theme.colors["base-gray"]};
        border-radius: 0.25rem;
        padding-left: 0.75rem;
        font-size: 0.875rem;
        border: none;
    }

    .cep {
        grid-column: span 3;
        max-width: 12.5rem;
    }
    .street {
        grid-column: span 3;
    }
    .complement {
        grid-column: span 2;
    }

`

export const TitlePayMethod = styled.div`
    color: blue;
`

export const RadioBoxContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px;
    gap: 0.725rem;

    width: 35rem;
    height: 3.1rem;

    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
`

interface RadioBoxProps {
    isActive: boolean;
    color: 'gray' | 'purple';
}

const RadioColors = {
    gray: '#EEEDED',
    purple: '#EBE5F9'
}

export const RadioBox = styled.button<RadioBoxProps>`
    height: 100%;
    border: 1px solid #d7d7d7;
    border-radius: 0.375rem;
    display: flex;
    font-size: 0.75rem;
    align-items: center;
    justify-content: center;
    transition: border-color 0.2s;
    width: 35rem;
    /* background: ${({theme}) => theme.colors["base-input"]}; */
    background: ${(props) => props.isActive ? RadioColors["purple"] : RadioColors["gray"]};
    border: none;
    gap: 0.75rem;

    &:hover{
        filter: brightness(0.9);
    }

    svg {
        color: ${({theme}) => theme.colors["purple"]};
    }

`

