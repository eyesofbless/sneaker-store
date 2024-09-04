import { getBrands } from "@/requests/getBrands";
import { getProductsByFilters } from "@/requests/getProductsByFilters";
import {getSearchProducts} from "@/requests/getSearchProducts";
import {SearchParams} from "../../../types"
import React from "react";
import ProductsLayout from "@/components/ProductsLayout";




const Shoes:React.FC<SearchParams> = async ({searchParams}) => {

    let brands = await getBrands('shoes');


    let shoesModels = await getProductsByFilters(
        {searchParams}
    );

    let foundProducts
    if (searchParams?.query) {
        foundProducts = await getSearchProducts(searchParams.query);
    }

    brands = brands.filter((item: any, index: number) => brands.indexOf(item) === index);

    return (
        <div>
            <ProductsLayout foundProducts={foundProducts}
                            brands={brands}
                            searchParams={searchParams}
                            models={shoesModels}/>
        </div>
    );
};

export default Shoes;
