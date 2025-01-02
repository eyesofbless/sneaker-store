import { getProductsByFilters } from "@/requests/getProductsByFilters";
import React from "react";
import {searchParamsInterface} from "../../../types";
import {getProductsByGender} from "@/requests/getProductsByGender";
import ProductsLayout from "@/components/ProductsLayout";

interface ParamsProps {
    params: {
        gender: string;
    };
    searchParams: searchParamsInterface;  // Убедитесь, что searchParams соответствует типу SearchParams
}

const GenderPage:React.FC<ParamsProps> = async ({ params, searchParams }) => {
    // Получение моделей по фильтрам
    const products = await getProductsByFilters(searchParams);
    // Получение продуктов по бренду
    const models = await getProductsByGender(params.gender)

    const filteredProducts = models.filter((model: any) =>
        products.some((product: any) => product.article === model.article)
    );

    return (
        <div>
            <ProductsLayout
                models={filteredProducts}
                searchParams={searchParams}
            />
        </div>
    );
};

export default GenderPage;
