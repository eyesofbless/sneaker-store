'use client'

import Navigation from "@/components/header/Navigation";
import FiltersSidebar from "@/components/products-content/filters/FiltersSidebar";
import Filters from "@/components/products-content/filters/Filters";
import CategoryFilters from "@/components/products-content/filters/CategoryFilters";
import ProductsList from "@/components/products-content/ProductsList";
import {usePathname} from "next/navigation";
import {useSearchStore} from "@/stores/search-store";

interface ProductsLayoutProps {
    foundProducts:any,
    searchParams:any,
    models:any,
    filters:any,
    brand?:string
}

const ProductsLayout = ({foundProducts, searchParams, models,filters,brand}: ProductsLayoutProps) => {

    const {query}:any = useSearchStore()
    const pathname = usePathname();

    let title = ''

    switch (pathname) {
        case '/shoes':
            title = 'ОБУВЬ'
            break
        case '/clothes':
            title = 'ОДЕЖДА'
            break
        case '/brands/'+brand:
            if (brand) {
                title = brand
            }
            break
        default:
            title = 'АКСЕССУАРЫ'
    }

    return (
        <div>
            <Navigation foundProducts={foundProducts}/>
            {((pathname === "/search") && (!query)) ?
                <div className="w-full flex flex-col items-center justify-center">
                    <p className="mt-[100px]">Извините, по вашему запросу ничего не найдено</p>
                    <p className="text-[50px]">:(</p>
                </div>
                :
                <div className='flex flex-col m-10 mt-[100px]'>
                <p className='text-3xl font-bold sm:hidden'>
                    {pathname==='/search'?`ТОВАРЫ ПО ЗАПРОСУ "${query.toUpperCase()}"`:title.toUpperCase()}
                </p>
                <div className='flex justify-between mb-5 mt-5 items-center'>
                    <p className='text-3xl font-bold sm:block hidden'>
                        {pathname==='/search'?`ТОВАРЫ ПО ЗАПРОСУ "${query.toUpperCase()}"`:title.toUpperCase()}
                    </p>
                    <FiltersSidebar filters={filters}/>
                    <Filters currentFilters={searchParams}/>
                </div>
                <div className='flex justify-between items-start'>
                    <div className='sticky top-[100px]'>
                        <CategoryFilters filters={filters} />
                    </div>
                    <div className='sm:pl-3'>
                        <ProductsList models={models}/>
                    </div>
                </div>
            </div>}
        </div>
    )
}

export default ProductsLayout;