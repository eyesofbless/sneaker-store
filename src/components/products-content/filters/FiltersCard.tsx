'use client'

import {IoIosArrowDown} from "react-icons/io";
import React from "react";
import {usePathname} from "next/navigation";


const FiltersCard = ({
                         filters,
                         isVisible,
                         selectedFilters,
                         handleCategoryChange,
                         filterType,
                         filterName,
                         toggleOpen,
                         widgetState,
                         widgetStateNumber
                     }: any) => {


    const pathname = usePathname()


    return (
        <div>
            <div className={`${!isVisible && 'border-t-2 border-[#e0dedc]'}`}>
                <div className='flex flex-row justify-between'>
                    <p className='text-[#929292] mb-4'>{
                        filterType === 'types'
                        ?
                        (pathname.includes('brands') ? 'Категория' : filterName)
                        :
                        filterName
                    }
                    </p>
                    <IoIosArrowDown
                        onClick={() => toggleOpen(widgetStateNumber)}
                        className='mt-[3px] cursor-pointer text-[#e0dedc]'
                        size={25}
                    />
                </div>
                {widgetState[widgetStateNumber] && (
                    <ul className='flex flex-col gap-2 mb-5'>
                        {filters[filterType]?.map((item: any) => (
                            <li className="flex" key={item}>
                                <input
                                    className="mr-3 cursor-pointer"
                                    type='checkbox'
                                    checked={selectedFilters[filterType].includes(item)}
                                    onChange={(e) =>
                                        handleCategoryChange(item, filterType, e.target.checked)}
                                />
                                <p>{item}</p>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    )
}

export default FiltersCard

