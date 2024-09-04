import Navigation from "@/components/header/Navigation";
import MainContent from "@/components/MainContent";
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
            <main className="flex min-h-screen flex-col items-center justify-between p-24">
                <MainContent/>
            </main>
        </div>
    );
}
