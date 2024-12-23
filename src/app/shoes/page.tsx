import { getProductsByFilters } from "@/requests/getProductsByFilters";
import {getSearchProducts} from "@/requests/getSearchProducts";
import {searchParamsInterface} from "../../../types"
import React from "react";
import ProductsLayout from "@/components/ProductsLayout";
import {getFilters} from "@/requests/getFilters";


interface ShoesProps {
    searchParams:searchParamsInterface
}

const Shoes:React.FC<ShoesProps> = async ({searchParams}) => {


    let shoesModels = await getProductsByFilters(
        searchParams,'shoes'
    );

    let foundProducts
    if (searchParams?.query) {
        foundProducts = await getSearchProducts(searchParams.query);
    }


    return (
        <div>
            <ProductsLayout foundProducts={foundProducts}
                            searchParams={searchParams}
                            models={shoesModels}/>
        </div>
    );
};

export default Shoes;
