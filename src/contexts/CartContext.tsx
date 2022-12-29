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
    amount: number,
    priceTotal: number
}

interface CartUpdate {
    id: number,
    amount: number
}

interface CartContextType {
    cart: CartCoffeeData[],
    addCart: (coffee : CartCoffeeData) => void,
    updatedCartAmount: (id: number, amount: number) => void,
    deleteCoffeeInCart: (id: number) => void
}

export const CartContext = createContext<CartContextType>({} as CartContextType)

export default function CartProvider({ children }: CartProviderProps) {

    const [cart, setCart] = useState<CartCoffeeData[]>([])

    function addCart(coffee: CartCoffeeData) {

        const verifyExistInCart = cart.find((product) => {
            return product.id === coffee.id
        })

        if(verifyExistInCart) {
            console.log(verifyExistInCart);

            const newPrice = coffee.price * coffee.amount

            const updatedCart = cart.map(product => product.id === coffee.id ? {
                ...product,
                amount: coffee.amount,
                priceTotal: newPrice
            } : product)

            setCart(updatedCart)

            toast.success('☕️ Pedido atualizado!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });

        } else {

            const newPrice = coffee.price * coffee.amount

            const addCoffee = [...cart, {...coffee, priceTotal: newPrice}]
    
            setCart(addCoffee)

            // toast.success('Item adicionado ao carrinho!')

            toast.success('☕️ Café adicionado!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });

        }

    }

    function updatedCartAmount(id: number, amount: number) {
        const searchCart = cart.find((product) => {
            return product.id === id
        })

        if(searchCart) {

            const newPrice = searchCart.price * amount

            const updatedCart = cart.map(product => product.id === id ? {
                ...product,
                amount: amount,
                priceTotal: newPrice
            } : product)

            setCart(updatedCart)

        }
    }

    function deleteCoffeeInCart(id: number) {
        const filtered = cart.filter(cart => {
            return cart.id != id;
        });

        if(filtered) {
            setCart(filtered)

            toast.error('Item removido!', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
        }
    }

    return (
        <CartContext.Provider value={{ cart, addCart, updatedCartAmount, deleteCoffeeInCart }}>
            {children}
        </CartContext.Provider>
    )
}

export function useCart(): CartContextType {
    const context = useContext(CartContext)

    return context
}