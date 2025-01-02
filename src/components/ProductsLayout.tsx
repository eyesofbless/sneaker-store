'use client'

import FiltersSidebar from "@/components/products-content/filters/FiltersSidebar";
import Filters from "@/components/products-content/filters/Filters";
import CategoryFilters from "@/components/products-content/filters/CategoryFilters";
import ProductsList from "@/components/products-content/ProductsList";
import {usePathname} from "next/navigation";
import {useFiltersStore} from "@/stores/filters-store";
import {useEffect} from "react";
import {ProductInterface} from "../../types";

interface ProductsLayoutProps {
    searchParams: any,
    models: ProductInterface[],
    brand?: string,
}

const ProductsLayout = ({searchParams, models, brand}: ProductsLayoutProps) => {

    const pathname = usePathname();

    const {setFilters, filters}: any = useFiltersStore();

    useEffect(() => {
        setFilters(models)
    }, [pathname]);

    let title = ''

    switch (true) { // Используем true для гибкости условий
        case pathname === '/shoes':
            title = 'ОБУВЬ';
            break;
        case pathname === '/clothes':
            title = 'ОДЕЖДА';
            break;
        case pathname.startsWith('/brands/'): // Проверяем, начинается ли с '/brands/'
            title = brand || 'БРЕНД'; // Если бренд не найден, задать дефолтное значение
            break;
        case pathname === '/sale':
            title = 'РАСПРОДАЖА';
            break;
        case pathname === '/male':
            title = 'МУЖСКОЕ';
            break;
        case pathname === '/female':
            title = 'ЖЕНСКОЕ';
            break
        case pathname === '/all_gen':
            title = 'ВСЕМ';
            break
        default:
            title = 'АКСЕССУАРЫ';
    }

    console.log(filters)

    return (
        <div>
            <div className='flex flex-col m-10 mt-[100px]'>
                <p className='text-3xl font-bold sm:hidden'>
                    {title.toUpperCase()}
                </p>
                <div className='flex justify-between mb-5 mt-5 items-center'>
                    <p className='text-3xl font-bold sm:block hidden'>
                        {title.toUpperCase()}
                    </p>
                    <FiltersSidebar filters={filters}/>
                    <Filters currentFilters={searchParams}/>
                </div>
                <div className='flex justify-between items-start'>
                    <div className='sticky top-[100px]'>
                        <CategoryFilters filters={filters}/>
                    </div>
                    <div className='sm:pl-3'>
                        <ProductsList models={models}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductsLayout;