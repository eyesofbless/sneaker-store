import ProductPage from "@/components/product-card/ProductPage";
import { getProductsById } from "@/requests/getProductsById";
import Navigation from "@/components/header/Navigation";
import { getSearchProducts } from "@/requests/getSearchProducts";

interface ParamsProps {
    params: {
        id: string;
    };
}

const Page = async ({ params}: ParamsProps) => {


    // Получаем данные об одежде по id
    const shoes = await getProductsById(params.id,'shoes');

    return (
        <div>
            <ProductPage product={shoes[0]} />
        </div>
    );
};

export default Page;
