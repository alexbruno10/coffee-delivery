import { FormEvent, useState } from 'react';
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
CartConfirmCard,
CardButton,
CardPrice,
CardButtonRemove,
CardSubmit,
CardSubmitValues,
CardSubmitTotalValues,
CardSubmitButton
} from './style'
import { MapPin, CurrencyDollar, CreditCard, Money, Bank, Minus, Plus, Trash } from 'phosphor-react'
import { useCart } from '../../contexts/CartContext';
import { CardFooterQtd, CardPlusMinusButton } from '../../components/CoffeeCard/styles';
import { formatMoney } from "../../utils/formatedMoney";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { useNavigate } from 'react-router-dom';

const newCycleFormValidationSchema = zod.object({
    cep: zod.string().min(1, 'Informe o cep'),
    street: zod.string().min(1, 'Informe a rua'),
    number: zod.string().min(1, 'Informe o número'),
    district: zod.string().min(1, 'Informe o destrito'),
    complement: zod.string(),
    city: zod.string().min(1, 'Informe a cidade'),
    uf: zod.string().min(1, 'Informe o UF'),
  })
  
  export type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

  export default function Cart () {
    
    const NewCycleForm = useForm<NewCycleFormData>({
      resolver: zodResolver(newCycleFormValidationSchema),
    });

    const { register, handleSubmit, formState: { errors }, reset } = useForm<NewCycleFormData>();

    const { cart, updatedCartAmount, deleteCoffeeInCart } = useCart();

    const [type, setType] = useState('');

    const totalValues =
    formatMoney(
      cart.reduce((sumTotal, product) => {
        return sumTotal + product.priceTotal
      }, 0)
    )

    const delivery = cart.length > 0 ? 7.00 : 0.00

      
    const totalWithDelivery = formatMoney(parseFloat(totalValues)  + delivery) 

    const navigate = useNavigate();
      
    
    function formatedPrice(price: number) {

        const formatedPrice = formatMoney(price)
        return formatedPrice
    }

    function handleDecrementAmount(id: number, amount: number) {
        
        const newAmountCoffee = amount
        
        if(newAmountCoffee == 1) {
            return
        } else {
            const newAmount = newAmountCoffee - 1 
            updatedCartAmount(id, newAmount)
        }
        
    }
    
    function handleIncrementAmount(id: number, amount: number) {
        const newAmountCoffee = amount
        const newAmount = newAmountCoffee + 1
        updatedCartAmount(id, newAmount)
    }

    function handleDelete(id: number) {
        deleteCoffeeInCart(id)
    }


    function handleFormData(data: NewCycleFormData) {

        const form = {...data, typePayment: type, totalPayment: totalWithDelivery}
        reset()
        navigate("/completed", {
            state: form,
        });
    }

    return (
        <form onSubmit={handleSubmit(handleFormData)}>
        <FormProvider {...NewCycleForm}>
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
                            <input type="text" className="cep" placeholder="CEP" {...register("cep", { required: true })}/>
                            <input type="text" className="street" placeholder="Rua" {...register("street", { required: true })} />

                            <input type="text" className="number" placeholder="Número" {...register("number", { required: true })}/>
                            <input type="text" className="complement" placeholder="Complemento" {...register("complement")} />


                            <input type="text" className="district" placeholder="Bairro" {...register("district", { required: true })}/>
                            <input type="text" className="city" placeholder="Cidade" {...register("city", { required: true })} />
                            <input type="text" className="uf" placeholder="UF" {...register("uf", { required: true })} />
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
                        <div>
                            <p>{cart.title}</p>
                            <CardButton>
                                <CardFooterQtd>
                                    <CardPlusMinusButton onClick={() => handleDecrementAmount(cart.id, cart.amount)}>
                                            <Minus size={14} weight="fill"/>
                                    </CardPlusMinusButton>
                                    <span>{cart.amount}</span>
                                    <CardPlusMinusButton onClick={() => handleIncrementAmount(cart.id, cart.amount)}>
                                            <Plus size={14} weight="fill"/>
                                    </CardPlusMinusButton>
                                </CardFooterQtd>
                                <CardButtonRemove onClick={() => handleDelete(cart.id)}>
                                    <Trash size={15}/>
                                    <span>REMOVER</span>
                                </CardButtonRemove>
                            </CardButton>
                        </div>
                        <CardPrice>R$ {formatedPrice(cart.priceTotal)}</CardPrice>
                        </CartConfirmCard>
                    ))}
                    <CardSubmit>
                        <CardSubmitValues>
                            <span>Total de itens</span>
                            <span>R$ {totalValues}</span>
                        </CardSubmitValues>
                        <CardSubmitValues>
                            <span>Entrega</span>
                            <span>{cart.length > 0 ? 'R$ 7,00' : 'R$ 0,00'}</span>
                        </CardSubmitValues>
                        <CardSubmitTotalValues>
                                <span>Total</span>
                                <span>R$ {totalWithDelivery}</span>
                        </CardSubmitTotalValues>
                    </CardSubmit>
                    <CardSubmitButton disabled={cart.length == 0 || type == ''}>Confirmar</CardSubmitButton>
                </CartConfirmRequest>
            </div>

        </CartContainer>
        </FormProvider>
        </form>
    )
}