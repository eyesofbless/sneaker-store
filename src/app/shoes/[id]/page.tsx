import ProductPage from "@/components/product-card/ProductPage";
import { getProductsById } from "@/requests/getProductsById";
import Navigation from "@/components/header/Navigation";
import { getSearchProducts } from "@/requests/getSearchProducts";

interface ParamsProps {
    params: {
        id: string;
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

    // Получаем данные об одежде по id
    const shoes = await getProductsById(params.id,'shoes');

    return (
        <div>
            <Navigation foundProducts={foundProducts}  />
            <ProductPage product={shoes[0]} />
        </div>
    );
};

export default Page;
