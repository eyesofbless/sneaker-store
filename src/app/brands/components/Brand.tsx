'use client'

import React from "react";

interface BrandProps {
    letter: string
    brands: string[]

}


const Brand: React.FC<BrandProps> = async ({letter, brands}) => {

    return (
        <div className='flex flex-col align-middle'>
            <div
                className='
                    pb-1
                    border-b-2
                    border-[#e0dedc]
                    w-[225px]'>
                <p
                    className='
                    font-bold
                    text-[20px]
                    '>{letter}</p>
            </div>

            <div>{brands.map((item: any) =>
                <div className='
                    hover:text-blue-600
                    cursor-pointer
                    '>{item[0].toUpperCase() === letter && item}</div>
            )}</div>
        </div>
    )
}

export default Brand