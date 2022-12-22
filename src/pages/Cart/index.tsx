import { CartContainer, 
CartTitleRequest, 
CartForm, 
CartFormAddress, 
CartMethodPay, 
CartTitleFormAddress, 
CartConfirmRequest, 
CartInputAddress,
AddressFormContainer 
} from './style'
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
                        <AddressFormContainer>
                            <input type="text" className="cep" placeholder="CEP"/>
                            <input type="text" className="street" placeholder="Rua"/>

                                <input type="text" className="number" placeholder="Número"/>
                                <input type="text" className="complement" placeholder="Complemento"/>


                                <input type="text" className="district" placeholder="Bairro"/>
                                <input type="text" className="city" placeholder="Cidade"/>
                                <input type="text" className="uf" placeholder="UF"/>

                        </AddressFormContainer>
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