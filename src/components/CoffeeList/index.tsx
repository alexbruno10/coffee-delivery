import CoffeeCard from "../CoffeeCard";
import { CoffeeListContainer } from "./styles";

export default function CoffeeList() {
    return (
        <CoffeeListContainer>
            <span>Nossos Cafés</span>
            <div>
                <CoffeeCard type="arabe"/>
                <CoffeeCard type="Ola"/>
                <CoffeeCard type="Ola"/>
                <CoffeeCard type="Ola"/>
                <CoffeeCard type="Ola"/>
                <CoffeeCard type="Ola"/>
                <CoffeeCard type="Ola"/>
                <CoffeeCard type="Ola"/>
            </div>
        </CoffeeListContainer>
    )
} 