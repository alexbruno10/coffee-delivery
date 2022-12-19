import { CardContainer, CardSpecifications, CardTitle, CardDescription, CardFooter, CardFooterQtd, CardPlusMinusButton} from "./styles";
import { Minus, Plus, ShoppingCartSimple } from "phosphor-react";

interface CoffeeCardProps {
    title: string,
    price: number,
    description: string,
    specifications: string[] | undefined,
    image: string
}

export default function CoffeeCard({ title, price, description, specifications, image }: CoffeeCardProps) {
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
            <span>R$ {price}</span>

                <CardFooterQtd>
                    <CardPlusMinusButton >
                        <Minus size={14} weight="fill"/>
                    </CardPlusMinusButton>
                    <span>1</span>
                    <CardPlusMinusButton>
                        <Plus size={14} weight="fill"/>
                    </CardPlusMinusButton>
                </CardFooterQtd>   

            <button><ShoppingCartSimple /></button>
            </CardFooter>

        </CardContainer>
        </>
    )
}