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

export const CartTitleFormAddress = styled.div`

    padding: 0px;
    gap: 0.5rem;

    width: 35rem;
    height: 2.75rem;

    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
    margin-left: 0.25rem;
    margin-top: 1rem;
    margin-right: 1rem;

    >p {
        display: flex;
        font-weight: 400;
        color: ${({theme}) => theme.colors["base-subtitle"]};
        gap: 0.5rem;

        svg {
            color: ${({theme}) => theme.colors["yellow-dark"]};
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

`;

