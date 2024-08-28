import Navigation from "@/components/Navigation";
import ShoesFilter from "@/app/shoes/components/ShoesFilter";
import { getBrands } from "@/requests/getBrands";
import Filters from "@/app/shoes/components/Filters";
import ShoesList from "@/app/shoes/components/ShoesList";
import { getShoesByFilters } from "@/requests/getShoesByFilters";
import FiltersSidebar from "@/app/shoes/components/FiltersSidebar";



interface FilterProps {
    searchParams: {
        brands: string[];
        types: string[];
        genders: string[];
        seasons: string[];
        selectedOption: string;
    };
}

const Shoes = async ({ searchParams }: FilterProps) => {
    let brands = await getBrands('shoes');


    let shoesModels = await getShoesByFilters(
        searchParams.brands,
        searchParams.types,
        searchParams.genders,
        searchParams.seasons,
        searchParams.selectedOption
    );

    brands = brands.filter((item: any, index: number) => brands.indexOf(item) === index);

    return (
        <div>
            <Navigation />
            <div className='flex flex-col m-10 mt-[100px]'>
                <p className='text-3xl font-bold sm:hidden'>ОБУВЬ</p>
                <div className='flex justify-between mb-5 mt-5 items-center'>
                    <p className='text-3xl font-bold sm:block hidden'>ОБУВЬ</p>
                    <FiltersSidebar brands={brands}/>
                    <Filters currentFilters={searchParams} />
                </div>
                <div className='flex justify-between items-start'>
                    <div className='sticky top-[100px]'>
                        <ShoesFilter brands={brands} />
                    </div>
                    <div className='sm:pl-3'>
                        <ShoesList models={shoesModels} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shoes;
