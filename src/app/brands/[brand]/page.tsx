import { getProductsByFilters } from "@/requests/getProductsByFilters";
import React from "react";
import { searchParamsInterface } from "../../../../types";
import { getProductsByBrand } from "@/requests/getProductsByBrand";
import ProductsLayout from "@/components/ProductsLayout";

interface ParamsProps {
    params: {
        brand: string;
    };
    searchParams: searchParamsInterface;  // Убедитесь, что searchParams соответствует типу SearchParams
}

const Brand:React.FC<ParamsProps> = async ({ params, searchParams }) => {
    // Получение моделей по фильтрам
    const products = await getProductsByFilters(searchParams);

    let brandForReq

    if (params.brand.includes('%20')) {
        brandForReq = params.brand.replace('%20', ' ');
    }

    // Получение продуктов по бренду
    const models = await getProductsByBrand(params.brand.includes('%20')
        ?
        brandForReq
        :
        params.brand); // Добавлено await для асинхронного вызова

    const filteredProducts = models.filter((model: any) =>
        products.some((product: any) => product.article === model.article)
    );

    return (
        <div>
            <ProductsLayout
                searchParams={searchParams}
                models={filteredProducts}
                brand = {params.brand.includes('%20') ? brandForReq : params.brand}
            />
        </div>
    );
};

export default Brand;
