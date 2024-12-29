'use client'

import ProductsLayout from "@/components/ProductsLayout";



const ProductsLayoutWrapper = ({foundProducts,shoesModels,searchParams,models,brand}:any) => {


    const filteredProducts = models.filter((model: any) =>
        shoesModels.some((product: any) => product.article === model.article)
    );


    return (
        <div>
            <ProductsLayout
                foundProducts={foundProducts}
                searchParams={searchParams}
                models={filteredProducts}
                brand={brand}
            />
        </div>
    )
}

export default ProductsLayoutWrapper