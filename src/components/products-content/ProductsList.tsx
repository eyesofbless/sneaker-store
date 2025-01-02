'use client'
import ProductItem from "@/components/products-content/ProductItem";
import React, {useEffect} from "react";
import {useBasketStore} from "@/stores/basket-store";
import {ProductInterface} from "../../../types";

interface ProductsListProps {
    models: ProductInterface[]
}

const ProductsList: React.FC<ProductsListProps> = ({models}) => {

    const {fetchBasketProducts}: any = useBasketStore()

    useEffect(() => {
        let fetchBasketProductsFunction = async () => {
            await fetchBasketProducts()
        }
        fetchBasketProductsFunction()
    }, []);

    return (
        <div className="
        grid
        grid-cols-2
        sm:grid-cols-3
        md:grid-cols-4
        lg:grid-cols-5
        gap-[10px]">
            {models?.map((model: any) => (
                <ProductItem
                    id={model.id}
                    key={model.id}
                    image_path={model.image_path}
                    brand={model.brand}
                    model={model.model}
                    price={model.price}
                    bucket={model.bucket}
                    discount_price={model.discount_price}
                />
            ))}
        </div>
    );
};

export default ProductsList;
