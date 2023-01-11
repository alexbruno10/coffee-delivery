import { useLocation } from "react-router-dom"
import { 
CompletedOrderContainer, 
CompletedOrderTitle, 
CompletedOrderSubTitle, 
CompletedOrderContent,
CompletedOrderContentInfo 
} from "./style";
import MotoDelivery from '../../assets/coffee/delivery.svg'
import { MapPin, CurrencyDollar, Timer } from 'phosphor-react'

export default function OrderCompleted() {

    const { state } = useLocation();

    console.log(state)

    return (
        <CompletedOrderContainer>
            <CompletedOrderTitle>
                Uhu! Pedido confirmado
            </CompletedOrderTitle>
            <CompletedOrderSubTitle>
                Agora é só aguardar que logo o café chegará até você
            </CompletedOrderSubTitle>
            <CompletedOrderContent>
                <CompletedOrderContentInfo> 
                    <Timer size={20} weight="fill" />
                    conteudo 
                </CompletedOrderContentInfo>
                <img src={MotoDelivery} alt="" />
            </CompletedOrderContent>
        </CompletedOrderContainer>
    )
};
