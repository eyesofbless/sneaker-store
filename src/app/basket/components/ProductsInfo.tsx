import React from "react";
import { useBasketStore } from "@/stores/basket-store";



const ProductsInfo: React.FC = () => {
    const {
        basketProductsSum,
        basketProductsCount,

    }: any = useBasketStore();

    return (
        <div>
            <h1 className="text-[1.375rem] pb-6">
                В корзине {basketProductsCount} (шт.) товара
            </h1>
            <div className="pb-6 pt-6 border-b border-t border-b-gray-400">
                <div className="flex justify-between">
                    <p>Стоимость товаров</p>
                    <p>{basketProductsSum.toLocaleString()} ₽</p>
                </div>
            </div>
        </div>
    );
};

export default ProductsInfo;
