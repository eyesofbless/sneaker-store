'use client'

import React, { useEffect, useState } from "react";
import CategoryFilters, { ShoesFiltersProps } from "@/components/products-content/filters/CategoryFilters";

const FiltersSidebar: React.FC<ShoesFiltersProps> = ({ filters }) => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleFilters = () => {
        setIsVisible(!isVisible);
    };

    // Блокировка прокрутки при открытом сайдбаре
    useEffect(() => {
        if (isVisible) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        // Очистка эффекта при размонтировании компонента
        return () => {
            document.body.style.overflow = '';
        };
    }, [isVisible]);

    return (
        <div>
            <p onClick={toggleFilters}
               className='
                sm:hidden
                text-[15px]
                rounded-3xl
                border-[1px]
                border-gray-400
                cursor-pointer
                p-2 hover:bg-black
                hover:text-white
                transition duration-150'>Фильтры</p>

            <div className={`
            flex
            flex-col
            justify-center
            items-center
            p-4
            fixed 
            top-0 
            left-0 
            w-full 
            h-full 
            bg-white 
            text-black 
            transform
            ${isVisible ? 'translate-y-0' : '-translate-y-full'} 
            transition-transform duration-300 ease-in-out z-50`}>
                <p className='p-2 border-blue-400'>Фильтры</p>
                <div className='w-full border-b-4 border-gray-200'></div>
                <CategoryFilters filters={filters} isVisible={isVisible}/>
                <div className='w-full border-b-4 border-gray-200'></div>
                <button onClick={() => toggleFilters()}>
                    Посмотреть
                </button>
            </div>
            {isVisible && <div className="fixed inset-0 bg-black opacity-50 z-40" onClick={() => setIsVisible(false)}></div>}
        </div>
    )
}

export default FiltersSidebar;
