'use client'

import {useEffect} from "react";
import ProductsCount from "@/app/basket/components/ProductsInfo";
import ProductCard from "@/app/basket/components/ProductCard";
import {useBasketStore} from "@/stores/basket-store";

const BasketProducts = () => {

    const {basketProducts, fetchBasketProducts}:any = useBasketStore()

    useEffect(() => {
        fetchBasketProducts()
    }, []);


    return (
        <div className="md:w-full">
            <ProductsCount />
            <div
                className="
                flex
                flex-col
                ">
                {basketProducts.map((basketProduct:any,index:number) => (
                    <ProductCard product={basketProduct.item}
                                 size={basketProduct.size}
                                 count={basketProduct.count} key={index} />
                ))}
            </div>
        </div>
    )
}

export default BasketProducts