import {useEffect, useState} from "react";
import {getBasketProducts} from "@/requests/getBasketProducts";

const useGetBasketProducts = () => {

    const [basketProducts, setBasketProducts] = useState<{items:any}[]>();

    useEffect(() => {
        const checkProductInCart = async () => {
            let products = await getBasketProducts()
            setBasketProducts(products)
        };
        checkProductInCart();
    }, [basketProducts]);
    return basketProducts
}

export default useGetBasketProducts;