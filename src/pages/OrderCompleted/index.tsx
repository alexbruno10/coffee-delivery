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
import IconTitle from "../../components/IconTitle";
import { useTheme } from 'styled-components'

export default function OrderCompleted() {

    const {colors} = useTheme();

    const { state } = useLocation();

    let typePayment = state.typePayment

    if(typePayment == 'money') {
        typePayment = 'Dinheiro'
    } else if(typePayment == 'debit') {
        typePayment = 'Débito'
    } else {
        typePayment = 'Crédito'
    }

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
                    <IconTitle 
                    icon={<MapPin weight="fill"/>}
                    text={`${state.street}, ${state.number}, ${state.district} - ${state.city}, ${state.uf}`}
                    iconColor={colors['purple']}
                    />
                    <IconTitle 
                    icon={<Timer weight="fill"/>}
                    text={'20 min - 30 min'}
                    iconColor={colors['yellow-brand']}
                    />
                    <IconTitle 
                    icon={<CurrencyDollar weight="fill"/>}
                    text={typePayment}
                    iconColor={colors['yellow-dark']}
                    />
                </CompletedOrderContentInfo>
                <img src={MotoDelivery} alt="" />
            </CompletedOrderContent>
        </CompletedOrderContainer>
    )
};
