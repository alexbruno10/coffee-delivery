import { CartContainer, CartTitleRequest, CartForm, CartFormAddress, CartMethodPay, CartConfirmRequest } from './style'

export default function Cart () {
    return (
        <CartContainer>
            <div>
                <CartTitleRequest>Complete seu pedido</CartTitleRequest>
                <CartForm>
                    <CartFormAddress>

                    </CartFormAddress>

                    <CartMethodPay>

                    </CartMethodPay>

                </CartForm>
            </div>

            <div>
                <CartTitleRequest>Cafes selecionados</CartTitleRequest>
                <CartConfirmRequest>

                </CartConfirmRequest>
            </div>

        </CartContainer>
    )
}