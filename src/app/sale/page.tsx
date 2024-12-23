import { getProductsByFilters } from "@/requests/getProductsByFilters";
import {getSearchProducts} from "@/requests/getSearchProducts";
import {searchParamsInterface} from "../../../types"
import React from "react";
import ProductsLayout from "@/components/ProductsLayout";


interface SalesProps {
    searchParams:searchParamsInterface
}

const Sales:React.FC<SalesProps> = async ({searchParams}) => {


    let models = await getProductsByFilters(
        searchParams
    );

    let foundProducts
    if (searchParams?.query) {
        foundProducts = await getSearchProducts(searchParams.query);
    }

    const filteredProducts = models.filter((model: any) =>
        model.discount_price
    );

    return (
        <div>
            <ProductsLayout foundProducts={foundProducts}
                            searchParams={searchParams}
                            models={filteredProducts}/>
        </div>
    );
};

export default Sales;
