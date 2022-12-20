import CoffeeCard from "../CoffeeCard";
import { CoffeeListContainer } from "./styles";
import { products } from '../../../db.json' 


export default function CoffeeList() {
    return (
        <CoffeeListContainer>
            <span>Nossos Cafés</span>
            <div>
                {products.map(products => (
                    <CoffeeCard 
                    key={products.id}
                    id={products.id}
                    title={products.title}
                    image={products.image}
                    price={products.price}
                    description={products.description}
                    specifications={products.specifications}
                    />
                ))}

            </div>
        </CoffeeListContainer>
    )
} 