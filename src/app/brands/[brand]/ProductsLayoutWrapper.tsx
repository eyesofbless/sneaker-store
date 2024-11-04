'use client'

import ProductsLayout from "@/components/ProductsLayout";
import {useEffect, useState} from "react";

const ProductsLayoutWrapper = ({foundProducts,shoesModels,searchParams,models,brand}:any) => {

    const [filters, setFilters] = useState({
        types: Array.from(new Set(models.map((item: any) => item.type))),
        seasons: Array.from(new Set(models.map((item: any) => item.season))),
        genders: Array.from(new Set(models.map((item: any) => item.gender))),
        colors: Array.from(new Set(models.map((item: any) => item.color)))
        // можно добавить другие фильтры
    });

    useEffect(() => {
        const updatedFilters = {
            types: Array.from(new Set(models.map((item: any) => item.type))),
            seasons: Array.from(new Set(models.map((item: any) => item.season))),
            genders: Array.from(new Set(models.map((item: any) => item.gender))),
            colors: Array.from(new Set(models.map((item: any) => item.color)))
        };
        setFilters(updatedFilters);
    }, [models]);


    const filteredProducts = models.filter((model: any) =>
        shoesModels.some((product: any) => product.article === model.article)
    );

    return (
        <div>
            <ProductsLayout
                foundProducts={foundProducts}
                filters={filters}
                searchParams={searchParams}
                models={filteredProducts}
                brand={brand}
            />
        </div>
    )
}

export default ProductsLayoutWrapper