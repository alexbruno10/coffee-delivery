import { HeaderContainer, HeaderButtons, HeaderButtonLocal, HeaderButtonCart } from './styles'
import Logo from '../../assets/coffee/logo.svg'

import { MapPin, ShoppingCart } from 'phosphor-react'

export default function Header() {
    return (
        <>
            <HeaderContainer>
            <div>
            <img src={Logo} alt="" />

            
            <HeaderButtons>
                <HeaderButtonLocal>
                    <MapPin size={20} weight="fill" />
                    Varginha, MG
                </HeaderButtonLocal>
                <HeaderButtonCart>
                    <ShoppingCart size={20} width="fill"/>
                </HeaderButtonCart>
            </HeaderButtons>

            </div>
            </HeaderContainer>
        </>
    )
}