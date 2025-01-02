import ProductPage from "@/components/product-card/ProductPage";
import { getProductsById } from "@/requests/getProductsById";

interface ParamsProps {
    params: {
        id: string;
    };
}

const Page = async ({ params }: ParamsProps) => {


    // Получаем данные об обуви по id
    const brandProduct = await getProductsById(params.id);

    return (
        <div>
            <ProductPage product={brandProduct[0]} />
        </div>
    );
};

export default Page;
