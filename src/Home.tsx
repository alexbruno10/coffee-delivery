import Header from "./components/Header";
import Title from "./components/Title";
import { products } from '../db.json';
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