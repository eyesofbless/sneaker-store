'use client';

import { IoIosArrowDown } from "react-icons/io";
import React, { useEffect, useState } from "react";
import {usePathname, useRouter} from "next/navigation";
import qs from "query-string";

export interface ShoesFilterProps {
    brands: { 'brand': string }[];
    isVisible?: boolean;
}

const CategoryFilter: React.FC<ShoesFilterProps> = ({brands,isVisible}) => {

    const pathname = usePathname()
    const router = useRouter();

    const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
    const [checkedStates, setCheckedStates] = useState<Record<string, boolean>>({});

    const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
    const [selectedSeasons, setSelectedSeasons] = useState<string[]>([]);
    const [selectedGenders, setSelectedGenders] = useState<string[]>([]);



    useEffect(() => {
        let query: Record<string, any> = {};

        if (selectedBrands.length > 0) {
            query.brands = selectedBrands.join(',');
        }

        if (selectedTypes.length > 0) {
            query.types = selectedTypes.join(',');
        }

        if (selectedSeasons.length > 0) {
            query.seasons = selectedSeasons.join(',');
        }

        if (selectedGenders.length > 0) {
            query.genders = selectedGenders.join(',');
        }

        const url = qs.stringifyUrl({
            url: pathname,
            query: query,
        });

        router.push(url);
    }, [selectedBrands, selectedTypes, selectedSeasons, selectedGenders, router]);

    let [open, setOpen] = useState([false, true, true, false]);

    const toggleOpen = (index: number) => {
        const updatedOpen = open.map((item, i) => (i === index ? !item : item));
        setOpen(updatedOpen);
    };

    const handleBrandChange = (brand: string, checked: boolean) => {
        setCheckedStates(prev => ({ ...prev, [brand]: checked }));
        setSelectedBrands(prev =>
            checked ? [...prev, brand] : prev.filter(b => b !== brand)
        );
    };

    const handleTypeChange = (type: string, checked: boolean) => {
        setSelectedTypes(prev =>
            checked ? [...prev, type] : prev.filter(t => t !== type)
        );
    };

    const handleSeasonChange = (season: string, checked: boolean) => {
        setSelectedSeasons(prev =>
            checked ? [...prev, season] : prev.filter(s => s !== season)
        );
    };

    const handleGenderChange = (gender: string, checked: boolean) => {
        setSelectedGenders(prev =>
            checked ? [...prev, gender] : prev.filter(g => g !== gender)
        );
    };

    const styleForShoesFilter = 'hover:text-blue-600 transition cursor-pointer';

    return (
        <div className={`
        h-[calc(100vh-100px)] 
        pr-2 
        overflow-y-auto 
        ${isVisible ? 'block w-full': 'sm:block hidden w-[150px]'}`}>
            <div className={`${!isVisible && 'border-t-2 border-[#e0dedc]'}`}>
                <div className='flex flex-row justify-between'>
                    <p className='text-[#929292] mb-4'>Обувь</p>
                    <IoIosArrowDown
                        onClick={() => toggleOpen(0)}
                        className='mt-[3px] cursor-pointer text-[#e0dedc]'
                        size={25} />
                </div>
                {open[0] &&
                    <ul className='flex flex-col gap-2 mb-5'>
                        <li className='flex'>
                            <input
                                className="mr-3 cursor-pointer"
                                type='checkbox'
                                checked={selectedTypes.includes('sneakers')}
                                onChange={(e) => handleTypeChange('sneakers', e.target.checked)}
                            />
                            <p>Кроссовки</p>
                        </li>
                        <li className='flex'>
                            <input
                                className="mr-3 cursor-pointer"
                                type='checkbox'
                                checked={selectedTypes.includes('boots')}
                                onChange={(e) => handleTypeChange('boots', e.target.checked)}
                            />
                            <p>Ботинки</p>
                        </li>
                        <li className='flex'>
                            <input
                                className="mr-3 cursor-pointer"
                                type='checkbox'
                                checked={selectedTypes.includes('gumshoes')}
                                onChange={(e) => handleTypeChange('gumshoes', e.target.checked)}
                            />
                            <p>Кеды</p>
                        </li>
                    </ul>
                }
            </div>
            <div className='border-t-2 border-[#e0dedc]'>
                <div className='flex flex-row justify-between'>
                    <p className='text-[#929292] mb-4'>Бренды</p>
                    <IoIosArrowDown
                        onClick={() => toggleOpen(1)}
                        className='mt-[3px] cursor-pointer text-[#e0dedc]'
                        size={25} />
                </div>
                {open[1] && <ul className="flex flex-col gap-2 mb-5">
                    {brands.map((item) =>
                        <li className="flex" key={item.brand}>
                            <input
                                className="mr-3 cursor-pointer"
                                type='checkbox'
                                checked={checkedStates[item.brand] || false}
                                onChange={(e) => handleBrandChange(item.brand, e.target.checked)}
                            />
                            <p>{item.brand}</p>
                        </li>
                    )}
                </ul>}
            </div>
            <div className='border-t-2 border-[#e0dedc]'>
                <div className='flex flex-row justify-between'>
                    <p className='text-[#929292] mb-4'>Сезон</p>
                    <IoIosArrowDown
                        onClick={() => toggleOpen(2)}
                        className='mt-[3px] cursor-pointer text-[#e0dedc]'
                        size={25} />
                </div>
                {open[2] &&
                    <ul className="flex flex-col gap-2 mb-5">
                        <li className={styleForShoesFilter}>
                            <input
                                className="mr-3 cursor-pointer"
                                type='checkbox'
                                checked={selectedSeasons.includes('summer')}
                                onChange={(e) => handleSeasonChange('summer', e.target.checked)}
                            />
                            Лето
                        </li>
                        <li className={styleForShoesFilter}>
                            <input
                                className="mr-3 cursor-pointer"
                                type='checkbox'
                                checked={selectedSeasons.includes('winter')}
                                onChange={(e) => handleSeasonChange('winter', e.target.checked)}
                            />
                            Зима
                        </li>
                        <li className={styleForShoesFilter}>
                            <input
                                className="mr-3 cursor-pointer"
                                type='checkbox'
                                checked={selectedSeasons.includes('autumn')}
                                onChange={(e) => handleSeasonChange('autumn', e.target.checked)}
                            />
                            Осень
                        </li>
                    </ul>}
            </div>
            <div className='border-t-2 border-[#e0dedc]'>
                <div className='flex flex-row justify-between'>
                    <p className='text-[#929292] mb-4'>Пол</p>
                    <IoIosArrowDown
                        onClick={() => toggleOpen(3)}
                        className='mt-[3px] cursor-pointer text-[#e0dedc]'
                        size={25} />
                </div>
                {open[3] &&
                    <ul className="flex flex-col gap-2 mb-5">
                        <li className='flex'>
                            <input
                                className="mr-3 cursor-pointer"
                                type='checkbox'
                                checked={selectedGenders.includes('man')}
                                onChange={(e) => handleGenderChange('man', e.target.checked)}
                            />
                            <p>Мужское</p>
                        </li>
                        <li className='flex'>
                            <input
                                className="mr-3 cursor-pointer"
                                type='checkbox'
                                checked={selectedGenders.includes('woman')}
                                onChange={(e) => handleGenderChange('woman', e.target.checked)}
                            />
                            <p>Женское</p>
                        </li>
                    </ul>}
            </div>
        </div>
    );
}

export default CategoryFilter;
