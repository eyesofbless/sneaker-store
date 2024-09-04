import ShoesPage from "@/app/shoes/[id]/ShoesPage";
import { getShoesById } from "@/requests/getShoesById";
import Navigation from "@/components/header/Navigation";
import { getSearchProducts } from "@/requests/getSearchProducts";

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
    const shoes = await getShoesById(params.id);

    return (
        <div>
            <Navigation foundProducts={foundProducts}  />
            <ShoesPage shoes={shoes[0]} />
        </div>
    );
};

export default Page;
