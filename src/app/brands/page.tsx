
import {getAllBrands} from "@/requests/getBrands";
import BrandsIndex from "@/app/brands/components/BrandsIndex";

export default async function Brands() {

    const brands: Array<{ brand: string }> = await getAllBrands()

    let brandsArr:string[] = []
    brands.map((item:any) => brandsArr.push(item.brand))
    brandsArr = brandsArr.filter((item, index) => brandsArr.indexOf(item) === index);

    return (
        <div>
            <div
                className='
                flex
                flex-col
                m-10
                mt-[100px]
                mb-[125px]
                items-center
                '>
                <div className='mb-4'>
                    <p className='text-3xl font-bold'>БРЕНДЫ</p>
                </div>
                <BrandsIndex brands={brandsArr}/>
            </div>
        </div>
    )
}



