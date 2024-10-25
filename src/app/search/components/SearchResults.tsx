'use client';

import React, {useEffect, useState} from "react";
import { useSearchStore } from "@/stores/search-store";
import ProductsLayout from "@/components/ProductsLayout";

const SearchResults = ({ foundProducts, searchParams, models }: any) => {
    const { searchProducts }: any = useSearchStore();

    // Фильтруем товары из models, оставляя только те, которые присутствуют в searchProducts
    const filteredProducts = models.filter((model: any) =>
        searchProducts.some((product: any) => product.article === model.article)
    );

    const [filters, setFilters] = useState({
        brands: Array.from(new Set(filteredProducts.map((item: any) => item.brand))),
        seasons: Array.from(new Set(filteredProducts.map((item: any) => item.season))),
        genders: Array.from(new Set(filteredProducts.map((item: any) => item.gender))),
        colors: Array.from(new Set(filteredProducts.map((item: any) => item.color)))
        // можно добавить другие фильтры
    });

    console.log(filteredProducts)

    useEffect(() => {
        const updatedFilters = {
            brands: Array.from(new Set(filteredProducts.map((item: any) => item.brand))),
            seasons: Array.from(new Set(filteredProducts.map((item: any) => item.season))),
            genders: Array.from(new Set(filteredProducts.map((item: any) => item.gender))),
            colors: Array.from(new Set(filteredProducts.map((item: any) => item.color)))
        };
        setFilters(updatedFilters);
    }, [searchProducts]);



    return (
        <ProductsLayout
            foundProducts={foundProducts}
            searchParams={searchParams}
            models={filteredProducts}
            filters={filters}
        />
    );
};

export default SearchResults;
