import MainPage from "@/components/MainPage";

export const revalidate = 0

export default async function Home() {

    return (
        <div>
            <main className="
            flex
            flex-col
            items-center
            justify-between
            mt-[100px]
            p-[30px]">
                <MainPage/>
            </main>
        </div>
    );
}
