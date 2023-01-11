import { useLocation } from "react-router-dom"
import { 
CompletedOrderContainer, 
CompletedOrderTitle, 
CompletedOrderSubTitle, 
CompletedOrderContent 
} from "./style";

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
                <span>conteudo</span>
                <span>img</span>
            </CompletedOrderContent>
        </CompletedOrderContainer>
    )
};
