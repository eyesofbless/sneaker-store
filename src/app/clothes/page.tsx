import { getBrands } from "@/requests/getBrands";
import { getProductsByFilters } from "@/requests/getProductsByFilters";
import {getSearchProducts} from "@/requests/getSearchProducts";
import {searchParamsInterface} from "../../../types"
import React from "react";
import ProductsLayout from "@/components/ProductsLayout";
import {getFilters} from "@/requests/getFilters";


interface ClothesProps {
    searchParams:searchParamsInterface
}

const Clothes:React.FC<ClothesProps> = async ({searchParams}) => {


    let models = await getProductsByFilters(
        searchParams,'clothes'
    );

    let foundProducts
    if (searchParams?.query) {
        foundProducts = await getSearchProducts(searchParams.query);
    }

    return (
        <div>
            <ProductsLayout foundProducts={foundProducts}
                            searchParams={searchParams}
                            models={models}/>
        </div>
    );
};

export default Clothes;
