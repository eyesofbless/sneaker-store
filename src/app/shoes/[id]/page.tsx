
import ShoesPage from "@/app/shoes/[id]/ShoesPage";
import {getShoesById} from "@/requests/getShoesById";


interface ParamsProps {
    params: {
        id:number
    }
}

const Page = async ({params}:ParamsProps) => {


    const shoes = await getShoesById(params.id)


    return (
        <div>
            <ShoesPage shoes={shoes[0]} />
        </div>
    );
};

export default Page;

