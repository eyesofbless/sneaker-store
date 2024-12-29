import { getProductsByFilters } from "@/requests/getProductsByFilters";
import { getSearchProducts } from "@/requests/getSearchProducts";
import React from "react";
import {searchParamsInterface} from "../../../types";
import ProductsLayoutWrapper from "@/app/brands/[brand]/ProductsLayoutWrapper";
import {getProductsByGender} from "@/requests/getProductsByGender";

interface ParamsProps {
    params: {
        gender: string;
    };
    searchParams: searchParamsInterface;  // Убедитесь, что searchParams соответствует типу SearchParams
}

const GenderPage:React.FC<ParamsProps> = async ({ params, searchParams }) => {
    // Получение моделей по фильтрам
    const shoesModels = await getProductsByFilters(searchParams);

    // Проверка наличия поискового запроса
    let foundProducts;
    if (searchParams?.query) {  // Исправлено условие
        foundProducts = await getSearchProducts(searchParams.query);
    }


    // Получение продуктов по бренду
    const models = await getProductsByGender(params.gender)

    return (
        <div>
            <ProductsLayoutWrapper
                foundProducts={foundProducts}
                searchParams={searchParams}
                models={models}
                shoesModels={shoesModels}
            />
        </div>
    );
};

export default GenderPage;
