import { useLocation } from "react-router-dom"
import { 
CompletedOrderContainer, 
CompletedOrderTitle, 
CompletedOrderSubTitle, 
CompletedOrderContent,
CompletedOrderContentInfo,
CompletedOrderContentInfoLocalization,
CompletedOrderContentInfoIcons 
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
                    <CompletedOrderContentInfoLocalization>
                        <CompletedOrderContentInfoIcons>
                        <MapPin weight="fill" />
                        </CompletedOrderContentInfoIcons>
                        conteudo
                    </CompletedOrderContentInfoLocalization>
                    <CompletedOrderContentInfoLocalization>
                        <CompletedOrderContentInfoIcons>
                        <Timer weight="fill" />
                        </CompletedOrderContentInfoIcons>
                        conteudo
                    </CompletedOrderContentInfoLocalization>
                    <CompletedOrderContentInfoLocalization>
                        <CompletedOrderContentInfoIcons>
                        <CurrencyDollar weight="fill" />
                        </CompletedOrderContentInfoIcons>
                        conteudo
                    </CompletedOrderContentInfoLocalization>
                </CompletedOrderContentInfo>
                <img src={MotoDelivery} alt="" />
            </CompletedOrderContent>
        </CompletedOrderContainer>
    )
};
