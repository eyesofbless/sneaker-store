import ProductPage from "@/components/product-card/ProductPage";
import { getProductsById } from "@/requests/getProductsById";
import Navigation from "@/components/header/Navigation";
import { getSearchProducts } from "@/requests/getSearchProducts";

interface ParamsProps {
    params: {
        id: string;
    };
}

const Page = async ({params}: ParamsProps) => {


    // Получаем данные об обуви по id
    const clothes = await getProductsById(params.id,'clothes');

    return (
        <div>
            <ProductPage product={clothes[0]} />
        </div>
    );
};

export default Page;
