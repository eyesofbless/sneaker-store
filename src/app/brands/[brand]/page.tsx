import { getProductsByFilters } from "@/requests/getProductsByFilters";
import { getSearchProducts } from "@/requests/getSearchProducts";
import React from "react";
import ProductsLayout from "@/components/ProductsLayout";
import { getFilters } from "@/requests/getFilters";
import { SearchParams } from "../../../../types";
import { getProductsByBrand } from "@/requests/getProductsByBrand";

interface ParamsProps {
    params: {
        brand: string;
    };
    searchParams: SearchParams;  // Убедитесь, что searchParams соответствует типу SearchParams
}

const Brand: React.FC<ParamsProps> = async ({ params, searchParams }) => {
    // Получение моделей по фильтрам
    const shoesModels = await getProductsByFilters(searchParams.searchParams);

    // Проверка наличия поискового запроса
    let foundProducts;
    if (searchParams.searchParams?.query) {  // Исправлено условие
        foundProducts = await getSearchProducts(searchParams.searchParams?.query);
    }

    // Получение фильтров
    const filters = await getFilters('clothes');

    // Получение продуктов по бренду
    const models = await getProductsByBrand(params.brand); // Добавлено await для асинхронного вызова

    return (
        <div>
            <ProductsLayout
                foundProducts={foundProducts}
                filters={filters}
                searchParams={searchParams}
                models={models}  // Берется первый элемент моделей
            />
        </div>
    );
};

export default Brand;
