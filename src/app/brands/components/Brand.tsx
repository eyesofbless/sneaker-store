'use client'

import React from "react";
import Link from "next/link";

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

            <div>{brands.map((item: any,index) =>
                <Link href={`/brands/${item}`} key={index}>
                    <div
                        key={index}
                        className='
                    hover:text-blue-600
                    cursor-pointer
                    '>
                        {
                            item[0].toUpperCase() === letter && item
                        }
                    </div>
                </Link>
            )}
            </div>
        </div>
    )
}

export default Brand