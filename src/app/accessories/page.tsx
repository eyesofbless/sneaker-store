import { getProductsByFilters } from "@/requests/getProductsByFilters";
import {searchParamsInterface} from "../../../types"
import React from "react";
import ProductsLayout from "@/components/ProductsLayout";

interface AccessoriesProps {
    searchParams:searchParamsInterface
}


const Accessories:React.FC<AccessoriesProps> = async ({searchParams}) => {


    let models = await getProductsByFilters(
        searchParams,'accessories'
    );

    return (
        <div>
            <ProductsLayout
                searchParams={searchParams}
                models={models}/>
        </div>
    );
};

export default Accessories;
