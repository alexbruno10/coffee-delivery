import Header from "./components/Header";
import Title from "./components/Title";
import { products } from '../server.json';
import { useEffect } from "react";
import CoffeeList from "./components/CoffeeList";

export default function Home() {
    
    return (
        <>
            <Header />
            <Title />
            <CoffeeList />

        </>
    )
}