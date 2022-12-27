import { createContext, ReactNode, useContext, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface CartProviderProps {
    children: ReactNode
}

interface CartCoffeeData {
    id: number,
    title: string,
    price: number,
    image: string,
    amount: number
}

interface CartContextType {
    cart: CartCoffeeData[],
    addCart: (coffee : CartCoffeeData) => void
}

export const CartContext = createContext<CartContextType>({} as CartContextType)

export default function CartProvider({ children }: CartProviderProps) {

    const [cart, setCart] = useState<CartCoffeeData[]>([])

    function addCart(coffee: CartCoffeeData) {
        console.log(coffee.price);
        const newPrice = coffee.price * coffee.amount

        const updatedCart = [...cart, {...coffee, price: newPrice}]

        setCart(updatedCart)
        toast.success('Item adicionado ao carrinho!')

    }

    return (
        <CartContext.Provider value={{ cart, addCart }}>
            {children}
        </CartContext.Provider>
    )
}

export function useCart(): CartContextType {
    const context = useContext(CartContext)

    return context
}