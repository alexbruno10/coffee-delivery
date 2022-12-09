import {TitleContainer, TitleFormat, TitleIcons } from './styles'
import CoffeeLogo from '../../assets/coffee/coffee.svg'
import { Coffee, Timer, Package, ShoppingCart } from 'phosphor-react'
import IconTitle from '../IconTitle'
import { useTheme } from 'styled-components'

export default function Title() {

    const {colors} = useTheme();

    return (
        <>
        <TitleContainer>
            <div>
                <TitleFormat>
                <h2>Encontre o café perfeito para qualquer hora do dia</h2>
                <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>

                <TitleIcons>

                    <IconTitle 
                    icon={<ShoppingCart weight="fill"/>}
                    text={'Compra simples e segura'}
                    iconColor={colors['yellow-dark']}
                    />

                    <IconTitle 
                    icon={<Package weight="fill"/>}
                    text={'Embalagem mantém o café intacto'}
                    iconColor={colors['gray-500']}
                    />
                    
                    <IconTitle 
                    icon={<Timer weight="fill"/>}
                    text={'Entrega rápida e rastreada'}
                    iconColor={colors['yellow-brand']}
                    />
                    
                    <IconTitle 
                    icon={<Coffee weight="fill"/>}
                    text={'O café chega fresquinho até você'}
                    iconColor={colors['purple']}
                    />


                </TitleIcons>

                </TitleFormat>

                <img src={CoffeeLogo} alt="" />
            </div>
        </TitleContainer>
        </>
    )
}