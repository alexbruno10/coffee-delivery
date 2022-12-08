import {TitleContainer, TitleFormat, TitleIcons, FirstIcons, SecondIcons} from './styles'
import CoffeeLogo from '../../assets/coffee/coffee.svg'
import { Coffee, Timer, Package, ShoppingCart } from 'phosphor-react'

export default function Title() {
    return (
        <>
        <TitleContainer>
            <div>
                <TitleFormat>
                <h2>Encontre o café perfeito para qualquer hora do dia</h2>
                <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>

                <TitleIcons>
                    <FirstIcons>
                        <ShoppingCart size={20} width="fill"/>
                            <span>Compra simples e segura</span>
                        <Package size={20} width="fill"/>
                            <span>Embalagem mantém o café intacto</span>
                    </FirstIcons>
                    <SecondIcons>
                        <Coffee size={20} width="fill"/>
                        <Timer size={20} width="fill"/>
                    </SecondIcons>
                </TitleIcons>

                </TitleFormat>
                <img src={CoffeeLogo} alt="" />
            </div>
        </TitleContainer>
        </>
    )
}