'use client'

import {useEffect, useState} from "react";
import {getBasketProducts} from "@/requests/getBasketProducts";
import ProductsCount from "@/app/basket/components/ProductsInfo";
import ProductCard from "@/app/basket/components/ProductCard";

const BasketProducts = () => {

    let [basketProducts, setBasketProducts] = useState([])
    useEffect(() => {
        const checkProductInCart = async () => {
            let products = await getBasketProducts()
            setBasketProducts(products)
        };
        checkProductInCart()
    }, []);


    return (
        <div className="md:w-full">
            <ProductsCount products={basketProducts} />
            <div
                className="
                flex
                flex-col
                gap-5">
                {basketProducts.map((basketProduct:any,index) => (
                    <ProductCard product={basketProduct.item}
                                 size={basketProduct.size}
                                 count={basketProduct.count} key={index} />
                ))}
            </div>
        </div>
    )
}

export default BasketProducts