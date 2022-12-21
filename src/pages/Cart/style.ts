import styled from 'styled-components'

export const CartContainer = styled.div`
    display: flex;
    width: 70rem;
    margin-top: 2.5rem;
    margin-left: auto;
    margin-right: auto;
    gap: 2rem;
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