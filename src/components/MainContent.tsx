'use client'

import {useBasketStore} from "@/stores/basket-store";
import {useEffect} from "react";
import {redirect} from "next/navigation";

const MainContent = () => {

    const {fetchBasketProducts}: any = useBasketStore()

    useEffect(() => {
        let fetchBasketProductsFunction = async () => {
            await fetchBasketProducts()
        }
        fetchBasketProductsFunction()
    }, []);
    redirect('/brands')
    return (
        <div>123</div>
    )
}

export default MainContent