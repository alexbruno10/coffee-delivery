import { HeaderContainer, HeaderButtons, HeaderButtonLocal, HeaderButtonCart } from './styles'
import Logo from '../../assets/coffee/logo.svg'
import { NavLink } from 'react-router-dom'

import { MapPin, ShoppingCart } from 'phosphor-react'

export default function Header() {
    return (
        <>
            <HeaderContainer>
            <div>
            <NavLink to="/" title="Home">
            <img src={Logo} alt="" />
            </NavLink>

            
            <HeaderButtons>
                <HeaderButtonLocal>
                        <MapPin size={20} weight="fill" />
                        Varginha, MG
                </HeaderButtonLocal>
                    <NavLink to="/cart" title="Cart">
                        <HeaderButtonCart>
                                <ShoppingCart size={20} weight="fill"/>
                        </HeaderButtonCart>
                    </NavLink>
            </HeaderButtons>

            </div>
            </HeaderContainer>
        </>
    )
}