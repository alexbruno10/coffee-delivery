import { CardContainer } from "./styles";
import img from '../../assets/coffee/arabe.svg'

interface CoffeeCardProps {
    type: string;
}

export default function CoffeeCard({type}: CoffeeCardProps) {
    return (
        <>
        <CardContainer>
        <img src={`http://localhost:5173/src/assets/coffee/${type}.svg`} alt="" />
        </CardContainer>
        </>
    )
}