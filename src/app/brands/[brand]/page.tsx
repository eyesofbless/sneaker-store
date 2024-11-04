import { getProductsByFilters } from "@/requests/getProductsByFilters";
import { getSearchProducts } from "@/requests/getSearchProducts";
import React from "react";
import { searchParamsInterface } from "../../../../types";
import { getProductsByBrand } from "@/requests/getProductsByBrand";
import ProductsLayoutWrapper from "@/app/brands/[brand]/ProductsLayoutWrapper";

interface ParamsProps {
    params: {
        brand: string;
    };
    searchParams: searchParamsInterface;  // Убедитесь, что searchParams соответствует типу SearchParams
}

const Brand:React.FC<ParamsProps> = async ({ params, searchParams }) => {
    // Получение моделей по фильтрам
    const shoesModels = await getProductsByFilters(searchParams);

    // Проверка наличия поискового запроса
    let foundProducts;
    if (searchParams?.query) {  // Исправлено условие
        foundProducts = await getSearchProducts(searchParams.query);
    }

    // Получение продуктов по бренду
    const models = await getProductsByBrand(params.brand); // Добавлено await для асинхронного вызова

    return (
        <div>
            <ProductsLayoutWrapper
                foundProducts={foundProducts}
                searchParams={searchParams}
                models={models}
                shoesModels={shoesModels}
                brand = {params.brand}// Берется первый элемент моделей
            />
        </div>
    );
};

export default Brand;
