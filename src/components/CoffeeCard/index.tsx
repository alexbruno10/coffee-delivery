import { CardContainer } from "./styles";


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
            <span>{specifications}</span>
            <p>{title}</p>
            <p>{description}</p>
            <span>{price}</span>

        </CardContainer>
        </>
    )
}