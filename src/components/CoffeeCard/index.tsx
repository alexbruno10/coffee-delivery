import { CardContainer, CardSpecifications, CardTitle, CardDescription, CardFooter, CardCart ,CardFooterQtd, CardPrice, CardPlusMinusButton} from "./styles";
import { Minus, Plus, ShoppingCartSimple } from "phosphor-react";
import { formatMoney } from "../../utils/formatedMoney";
import { useState } from "react";
import { useCart } from "../../contexts/CartContext";

interface CoffeeCardProps {
    id: number,
    title: string,
    price: number,
    description: string,
    specifications: string[] | undefined,
    image: string
}

export default function CoffeeCard({ id, title, price, description, specifications, image }: CoffeeCardProps) {

    
    const formatedPrice = formatMoney(price)
    
    
    const [amount, setAmount] = useState(1)
    
    const { addCart } = useCart(); 
    
    function handleDecrementAmount(amount: number) {
        const newAmount = amount
        
        if(newAmount == 1) {
            return
        } else [
            setAmount(newAmount - 1)
        ]
        
    }
    
    function handleIncrementAmount(amount: number) {
        console.log(id);
        const newAmount = amount
        setAmount(newAmount +1)
    }
    
    const coffee = {
        id: id,
        title: title,
        price: price,
        image: image,
        amount: amount
    }

    return (
        <>
        <CardContainer>

            <img src={`http://localhost:5173/src/assets/coffee/${image}`} alt="" />
            <CardSpecifications>
                {specifications?.map(specifications => (
                    <span key={`${specifications}${title}`}>{specifications}</span>
                ))}
            </CardSpecifications>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
            <CardFooter>

                
            <span>R$ <CardPrice>{formatedPrice}</CardPrice></span>

                <CardFooterQtd>
                    <CardPlusMinusButton onClick={() => handleDecrementAmount(amount)} >
                            <Minus size={14} weight="fill"/>
                    </CardPlusMinusButton>
                    <span>{amount}</span>
                    <CardPlusMinusButton onClick={() => handleIncrementAmount(amount)}>
                            <Plus size={14} weight="fill"/>
                    </CardPlusMinusButton>
                </CardFooterQtd>   

            <CardCart
            onClick={() => {addCart(coffee)}}
            >
                <ShoppingCartSimple size={20} weight="fill"/>
            </CardCart>

            </CardFooter>

        </CardContainer>
        </>
    )
}