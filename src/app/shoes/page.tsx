import { getBrands } from "@/requests/getBrands";
import { getProductsByFilters } from "@/requests/getProductsByFilters";
import {getSearchProducts} from "@/requests/getSearchProducts";
import {SearchParams} from "../../../types"
import React from "react";
import ProductsLayout from "@/components/ProductsLayout";
import {getFilters} from "@/requests/getFilters";




const Shoes:React.FC<SearchParams> = async ({searchParams}) => {


    let shoesModels = await getProductsByFilters(
        searchParams,'shoes'
    );

    let foundProducts
    if (searchParams?.query) {
        foundProducts = await getSearchProducts(searchParams.query);
    }

    let filters = await getFilters('shoes')

    return (
        <div>
            <ProductsLayout foundProducts={foundProducts}
                            filters={filters}
                            searchParams={searchParams}
                            models={shoesModels}/>
        </div>
    );
};

export default Shoes;
