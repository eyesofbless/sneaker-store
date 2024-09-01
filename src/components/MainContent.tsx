'use client'

import {useBasketStore} from "@/stores/basket-store";
import {useEffect} from "react";

const MainContent = () => {

    const {fetchBasketProducts}: any = useBasketStore()

    useEffect(() => {
        let fetchBasketProductsFunction = async () => {
            await fetchBasketProducts()
        }
        fetchBasketProductsFunction()
    }, []);

    return (
        <div>123</div>
    )
}

export default MainContent