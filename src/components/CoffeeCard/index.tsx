import { CardContainer, CardSpecifications, CardTitle, CardDescription } from "./styles";


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
            <span>{price}</span>

        </CardContainer>
        </>
    )
}