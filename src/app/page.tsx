import Navigation from "@/components/header/Navigation";
import MainPage from "@/components/MainPage";
import {getSearchProducts} from "@/requests/getSearchProducts";

export const revalidate = 0

export default async function Home({
                                 searchParams,
                             }: {
    searchParams?: {
        query?: string;
    }
}) {
    let foundProducts
    if (searchParams?.query) {
        foundProducts = await getSearchProducts(searchParams.query);
    }
    return (
        <div>
            <Navigation foundProducts={foundProducts} />
            <main className="flex flex-col items-center justify-between mt-[100px] p-[30px]">
                <MainPage/>
            </main>
        </div>
    );
}
