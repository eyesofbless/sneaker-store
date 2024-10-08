'use client'
import ProductItem from "@/components/products-content/ProductItem";
import React, {useEffect} from "react";
import {useBasketStore} from "@/stores/basket-store";

interface ShoesListProps {
    models: any
}

const ProductsList: React.FC<ShoesListProps> = ({models}) => {

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
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
        gap-[10px]">
            {models.map((sneakers: any) => (
                <ProductItem
                    id={sneakers.id}
                    key={sneakers.id}
                    image_path={sneakers.image_path}
                    brand={sneakers.brand}
                    model={sneakers.model}
                    price={sneakers.price}
                />
            ))}
        </div>
    );
};

export default ProductsList;
