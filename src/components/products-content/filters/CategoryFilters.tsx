'use client';

import React, {useEffect, useState} from "react";
import {usePathname, useRouter} from "next/navigation";
import qs from "query-string";
import FiltersCard from "@/components/products-content/filters/FiltersCard";
import {filtersInterface} from "../../../../types";

export interface FiltersProps {
    filters: filtersInterface;
    isVisible?: boolean;
}

const CategoryFilters: React.FC<FiltersProps> = ({filters, isVisible}) => {

    const pathname = usePathname();
    const router = useRouter();

    // Общий объект состояния для всех фильтров
    const [selectedFilters, setSelectedFilters] = useState<Record<string, string[]>>({
        brands: [],
        types: [],
        seasons: [],
        genders: [],
    });

    // Обновляем URL при изменении фильтров
    useEffect(() => {
        const query = Object.entries(selectedFilters)
            .reduce((acc, [key, value]) => {
                if (value.length > 0) {
                    acc[key] = value.join(',');
                }
                return acc;
            }, {} as Record<string, string>);

        const url = qs.stringifyUrl({
            url: pathname,
            query,
        });

        router.push(url);
    }, [selectedFilters, pathname, router]);

    let [widgetState, setOpen] = useState([false, true, true, false]);

    const toggleOpen = (index: number) => {
        const updatedOpen = widgetState.map((item, i) => (i === index ? !item : item));
        setOpen(updatedOpen);
    };

    const handleCategoryChange = (category: string, filterKey: string, checked: boolean) => {
        setSelectedFilters((prev) => {
            const updatedFilter = checked
                ? [...prev[filterKey], category]
                : prev[filterKey].filter((item) => item !== category);

            return {
                ...prev,
                [filterKey]: updatedFilter,
            };
        });
    };

    let title = '';

    switch (pathname) {
        case '/shoes':
            title = 'Обувь';
            break;
        case '/clothes':
            title = 'Одежда';
            break;
        case '/sale':
            title = 'Категория';
            break;
        default:
            title = 'Аксессуары';
    }

    return (
        <div className={`
        h-[calc(100vh-100px)] 
        pr-2 
        overflow-y-auto 
        ${isVisible ? 'block w-full' : 'sm:block hidden w-[150px]'}`}>
            {!pathname.includes('search') && (
                <FiltersCard filters={filters}
                             isVisible={isVisible}
                             selectedFilters={selectedFilters}
                             filterName={title}
                             handleCategoryChange={handleCategoryChange}
                             filterType={'types'}
                             toggleOpen={toggleOpen}
                             widgetState={widgetState}
                             widgetStateNumber={0}/>
            )}
            {!pathname.includes('brands') && (
                <FiltersCard filters={filters}
                             isVisible={isVisible}
                             selectedFilters={selectedFilters}
                             filterName={'Бренды'}
                             handleCategoryChange={handleCategoryChange}
                             filterType={'brands'}
                             toggleOpen={toggleOpen}
                             widgetState={widgetState}
                             widgetStateNumber={1}/>
            )}
            <FiltersCard filters={filters}
                         isVisible={isVisible}
                         selectedFilters={selectedFilters}
                         filterName={'Сезоны'}
                         handleCategoryChange={handleCategoryChange}
                         filterType={'seasons'}
                         toggleOpen={toggleOpen}
                         widgetState={widgetState}
                         widgetStateNumber={2}/>
            <FiltersCard filters={filters}
                         isVisible={isVisible}
                         selectedFilters={selectedFilters}
                         filterName={'Пол'}
                         handleCategoryChange={handleCategoryChange}
                         filterType={'genders'}
                         toggleOpen={toggleOpen}
                         widgetState={widgetState}
                         widgetStateNumber={3}/>
        </div>
    );
};

export default CategoryFilters;
