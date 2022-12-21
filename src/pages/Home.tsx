import Header from "../components/Header";
import Title from "../components/Title";
import { products } from '../../db.json';
import { useEffect } from "react";
import CoffeeList from "../components/CoffeeList";
import Footer from "../components/Footer";

export default function Home() {

    return (
        <>
            <Title />
            <CoffeeList/>
            <Footer />
        </>
    )
}