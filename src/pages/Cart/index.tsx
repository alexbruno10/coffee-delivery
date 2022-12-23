import { useState } from 'react';
import { CartContainer, 
CartTitleRequest, 
CartForm, 
CartFormAddress, 
CartMethodPay, 
CartTitleForm, 
CartConfirmRequest,
AddressFormContainer,
RadioBoxContainer,
RadioBox,
CartConfirmCard
} from './style'
import { MapPin, CurrencyDollar, CreditCard, Money, Bank, Minus, Plus } from 'phosphor-react'
import { useCart } from '../../contexts/CartContext';
import { CardFooterQtd, CardPlusMinusButton } from '../../components/CoffeeCard/styles';

export default function Cart () {

    const { cart } = useCart();

    const [type, setType] = useState('');

    return (
        <CartContainer>
            <div>
                <CartTitleRequest>Complete seu pedido</CartTitleRequest>
                <CartForm>
                    <CartFormAddress>
                        <CartTitleForm color="yellow">
                            <p><MapPin size={22}/>Endereço de Entrega</p>
                            <span>Informe o endereço onde deseja receber seu pedido</span>
                        </CartTitleForm>
                        <AddressFormContainer>
                            <input type="text" className="cep" placeholder="CEP" required/>
                            <input type="text" className="street" placeholder="Rua" required/>

                            <input type="text" className="number" placeholder="Número" required/>
                            <input type="text" className="complement" placeholder="Complemento"/>


                            <input type="text" className="district" placeholder="Bairro" required/>
                            <input type="text" className="city" placeholder="Cidade" required/>
                            <input type="text" className="uf" placeholder="UF" required/>
                        </AddressFormContainer>
                    </CartFormAddress>

                    <CartMethodPay>
                        <CartTitleForm color="purple">
                            <p><CurrencyDollar size={22} weight="fill"/>Pagamento</p>
                            <span>O pagamento é feito na entrega. Escolha a forma que deseja pagar</span>
                        </CartTitleForm>
                        <RadioBoxContainer>
                            <RadioBox
                            onClick={() => {setType('credit')}}
                            isActive={type === 'credit'}
                            color="gray"
                            >
                                <CreditCard size={20}/>CARTÃO DE CRÉDITO
                            </RadioBox>
                            <RadioBox
                            onClick={() => {setType('debit')}}
                            isActive={type === 'debit'}
                            color="gray"
                            >
                                <Bank size={20}/>CARTÃO DE DÉBITO
                            </RadioBox>
                            <RadioBox
                            onClick={() => {setType('money')}}
                            isActive={type === 'money'}
                            color="gray"
                            >
                                <Money size={20}/>DINHEIRO
                            </RadioBox>
                        </RadioBoxContainer>
                    </CartMethodPay>

                </CartForm>
            </div>

            <div>
                <CartTitleRequest>Cafes selecionados</CartTitleRequest>
                <CartConfirmRequest>
                    {cart.map(cart => (
                        <CartConfirmCard key={cart.id}>
                        <img src={`http://localhost:5173/src/assets/coffee/${cart.image}`} alt="" />
                        <p>{cart.title}</p>
                        <CardFooterQtd>
                            <CardPlusMinusButton>
                                    <Minus size={14} weight="fill"/>
                            </CardPlusMinusButton>
                            <span>2</span>
                            <CardPlusMinusButton>
                                    <Plus size={14} weight="fill"/>
                            </CardPlusMinusButton>
                        </CardFooterQtd>
                        </CartConfirmCard>
                    ))}
                </CartConfirmRequest>
            </div>

        </CartContainer>
    )
}