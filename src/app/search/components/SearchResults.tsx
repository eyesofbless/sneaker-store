'use client'

import React from "react";
import {useSearchStore} from "@/stores/search-store";
import ProductsLayout from "@/components/ProductsLayout";
const SearchResults = ({foundProducts, brands, searchParams, models}: any) => {

    const {searchProducts}: any = useSearchStore();


    // Фильтруем товары из models, оставляя только те, которые присутствуют в searchProducts
    const filteredProducts = models.filter((model: any) =>
        searchProducts.some((product: any) => product.article === model.article)
    );


    return (
        <ProductsLayout
            foundProducts={foundProducts}
            brands={brands}
            searchParams={searchParams}
            models={filteredProducts}
        />
    );
};

export default SearchResults;
