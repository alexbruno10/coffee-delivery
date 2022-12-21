import { CartContainer, CartTitleRequest, CartForm, CartFormAddress, CartMethodPay, CartTitleFormAddress, CartConfirmRequest, CartInputAddress } from './style'
import { MapPin } from 'phosphor-react'

export default function Cart () {
    return (
        <CartContainer>
            <div>
                <CartTitleRequest>Complete seu pedido</CartTitleRequest>
                <CartForm>
                    <CartFormAddress>
                        <CartTitleFormAddress>
                            <p><MapPin size={22}/>Endereço de Entrega</p>
                            <span>Informe o endereço onde deseja receber seu pedido</span>
                        </CartTitleFormAddress>
                        <CartInputAddress bg="red"/>
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