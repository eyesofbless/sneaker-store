import React from "react";

interface ProductsCountProps {
    products:any
}


const ProductsInfo:React.FC<ProductsCountProps> = ({products}) => {

    let productsPrices:number[] = []
    products.map((item:any) => productsPrices.push(item.item.price))
    let productsPricesSum = productsPrices.reduce((accumulator,currentValue) =>
        accumulator+currentValue,0)
    return (
        <div>
            <h1
                className="
                text-[1.375rem]
                pb-6">
                В корзине {products.length} (шт.) товара
            </h1>
            <div
                className="
                pb-6
                pt-6
                border-b
                border-t
                border-b-gray-400">
                <div
                    className="
                    flex
                    justify-between">
                    <p>Стоимость товаров</p>
                    <p>{productsPricesSum.toLocaleString()} ₽</p>

                </div>
            </div>
        </div>
    )
}

export default ProductsInfo