'use client'

import React, { useRef } from "react";
import Brand from "@/app/brands/components/Brand";

interface BrandsIndexProps {
    brands: string[]
}

const BrandsIndex: React.FC<BrandsIndexProps> = ({ brands }) => {
    const scrollToElement = (ref: React.RefObject<HTMLDivElement>) => {
        if (ref.current) {
            const offsetTop = ref.current.getBoundingClientRect().top + window.scrollY - 60; // 60px - высота вашей шапки
            window.scrollTo({ top: offsetTop, behavior: 'smooth' });
        }
    };

    let firstLettersSet = new Set(brands.map((item: any) =>
        item[0].toUpperCase()
    ));
    let firstLettersArray = Array.from(firstLettersSet).sort();

    return (
        <div>
            <div className='flex gap-x-4 mb-10 justify-center'>
                {firstLettersArray.map((item: any) => (
                    <div
                        key={item}
                        onClick={() => scrollToElement(letterRefs[item])}
                        className='hover:text-blue-600 cursor-pointer'
                    >
                        {item}
                    </div>
                ))}
            </div>
            <div className='flex flex-wrap gap-[40px] justify-center'>
                {firstLettersArray.map(item =>
                    <BrandWithScroll brands={brands} letter={item} key={item} />
                )}
            </div>
        </div>
    )
}

const BrandWithScroll: React.FC<{ brands: string[], letter: string }> = ({ brands, letter }) => {
    const ref = useRef<HTMLDivElement>(null);
    letterRefs[letter] = ref;

    return (
        <div ref={ref} className="pt-5"> {/* pt-5 добавляет отступ сверху */}
            <Brand brands={brands} letter={letter}/>
        </div>
    );
};

// Объект для хранения рефов для каждой буквы
const letterRefs: { [key: string]: React.RefObject<HTMLDivElement> } = {};

export default BrandsIndex;
