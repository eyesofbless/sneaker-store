import ProductPage from "@/components/product-card/ProductPage";
import { getProductsById } from "@/requests/getProductsById";
import Navigation from "@/components/header/Navigation";
import { getSearchProducts } from "@/requests/getSearchProducts";
import Accessories from "@/app/accessories/page";

interface ParamsProps {
    params: {
        id: number;
    };
    searchParams: {
        query: string;
    }
}

const Page = async ({ params,searchParams }: ParamsProps) => {


    let foundProducts
    if (searchParams.query) {
        foundProducts = await getSearchProducts(searchParams.query);
    }

    // Получаем данные об обуви по id
    const accessories = await getProductsById(params.id,'accessories');

    return (
        <div>
            <Navigation foundProducts={foundProducts}  />
            <ProductPage product={accessories[0]} />
        </div>
    );
};

export default Page;
