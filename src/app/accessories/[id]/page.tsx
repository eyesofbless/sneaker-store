import ProductPage from "@/components/product-card/ProductPage";
import { getProductsById } from "@/requests/getProductsById";

interface ParamsProps {
    params: {
        id: string;
    };
}

const Page = async ({ params }: ParamsProps) => {


    // Получаем данные об обуви по id
    const accessories = await getProductsById(params.id,'accessories');

    return (
        <div>
            <ProductPage product={accessories[0]} />
        </div>
    );
};

export default Page;
