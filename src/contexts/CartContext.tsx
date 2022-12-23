import { createContext, ReactNode, useContext } from "react";

interface CartProviderProps {
    children: ReactNode
}

interface Coffee {
    id: number,
    title: string,
    price: number,
    amount: number,
    image: string
}

interface CartContextType {
    number: number,
    addCart: (title: string) => void
  }

export const CartContext = createContext<CartContextType>({} as CartContextType)

export default function CartProvider({ children }: CartProviderProps) {

    const number = 10

    function addCart(title: string) {
        console.log(title);
    }

    return (
        <CartContext.Provider value={{number, addCart}}>
            {children}
        </CartContext.Provider>
    )
}

export function useCart(): CartContextType {
    const context = useContext(CartContext)

    return context
}