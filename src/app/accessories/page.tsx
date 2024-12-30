import { getProductsByFilters } from "@/requests/getProductsByFilters";
import {getSearchProducts} from "@/requests/getSearchProducts";
import {searchParamsInterface} from "../../../types"
import React from "react";
import ProductsLayout from "@/components/ProductsLayout";
import {getFilters} from "@/requests/getFilters";

interface AccessoriesProps {
    searchParams:searchParamsInterface
}


const Accessories:React.FC<AccessoriesProps> = async ({searchParams}) => {


    let models = await getProductsByFilters(
        searchParams,'accessories'
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

export default Accessories;
