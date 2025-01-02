import { getProductsByFilters } from "@/requests/getProductsByFilters";
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

    const filteredProducts = models.filter((model: any) =>
        model.discount_price
    );

    return (
        <div>
            <ProductsLayout
                searchParams={searchParams}
                models={filteredProducts}/>
        </div>
    );
};

export default Sales;
