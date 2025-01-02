import { getProductsByFilters } from "@/requests/getProductsByFilters";
import {searchParamsInterface} from "../../../types"
import React from "react";
import ProductsLayout from "@/components/ProductsLayout";


interface ShoesProps {
    searchParams:searchParamsInterface
}

const Shoes:React.FC<ShoesProps> = async ({searchParams}) => {


    let shoesModels = await getProductsByFilters(
        searchParams,'shoes'
    );


    return (
        <div>
            <ProductsLayout
                searchParams={searchParams}
                models={shoesModels}/>
        </div>
    );
};

export default Shoes;
