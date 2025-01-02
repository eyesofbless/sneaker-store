import { getProductsByFilters } from "@/requests/getProductsByFilters";
import {searchParamsInterface} from "../../../types"
import React from "react";
import ProductsLayout from "@/components/ProductsLayout";


interface ClothesProps {
    searchParams:searchParamsInterface
}

const Clothes:React.FC<ClothesProps> = async ({searchParams}) => {


    let models = await getProductsByFilters(
        searchParams,'clothes'
    );

    return (
        <div>
            <ProductsLayout
                searchParams={searchParams}
                models={models}/>
        </div>
    );
};

export default Clothes;
