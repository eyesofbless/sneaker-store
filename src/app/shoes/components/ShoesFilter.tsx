'use client'

import {IoIosArrowDown} from "react-icons/io";
import React, {useState} from "react";

interface ShoesFilterProps {
    brands: { 'brand': string }[]
}

const ShoesFilter: React.FC<ShoesFilterProps> = ({brands}) => {

    let [open, toggleOpen] = useState(
        [
            {active: false},
            {active: true},
            {active: true},
            {active: false}])

    const toggleActive = (index: number) => {
        const updatedOpen = open.map((item, i) => ({
            ...item,
            active: i === index ? !item.active : item.active
        }));
        toggleOpen(updatedOpen);
    };

    const styleForShoesFilter = 'hover:text-blue-600 transition cursor-pointer'

    return (
        <div className='h-[calc(100vh-100px)] pr-2 overflow-y-scroll w-[150px] sm:block hidden'>
            <div className='border-t-2 border-[#e0dedc]'>
                <div className='flex flex-row justify-between'>
                    <p
                        className='
                  text-[#929292]
                  mb-4'
                    >Обувь</p>
                    <IoIosArrowDown
                        onClick={() => toggleActive(0)}
                        className='
                        mt-[3px]
                        cursor-pointer
                        text-[#e0dedc]'
                        size={25}/>
                </div>
                {open[0].active && <ul className='flex flex-col gap-2 mb-5'>
                    <li className={styleForShoesFilter}>Кроссовки</li>
                    <li className={styleForShoesFilter}>Ботинки</li>
                    <li className={styleForShoesFilter}>Кеды</li>
                </ul>}
            </div>
            <div className='border-t-2 border-[#e0dedc]'>
                <div className='flex flex-row justify-between'>
                    <p
                        className='
                  text-[#929292]
                  mb-4'
                    >Бренды</p>
                    <IoIosArrowDown
                        onClick={() => toggleActive(1)}
                        className='
                        mt-[3px]
                        cursor-pointer
                        text-[#e0dedc]'
                        size={25}/>
                </div>
                {open[1].active && <ul className="flex flex-col gap-2 mb-5">
                    {brands.map((item) =>
                        <li className=" flex">
                            <input className="mr-3 cursor-pointer" type={'checkbox'}/>
                            <p>{item.brand}</p>
                        </li>)}
                </ul>}
            </div>
            <div className='border-t-2 border-[#e0dedc]'>
                <div className='flex flex-row justify-between'>
                    <p
                        className='
                  text-[#929292]
                  mb-4'
                    >Сезон</p>
                    <IoIosArrowDown
                        onClick={() => toggleActive(2)}
                        className='
                        mt-[3px]
                        cursor-pointer
                        text-[#e0dedc]'
                        size={25}/>
                </div>
                {open[2].active &&
                    <ul className="flex flex-col gap-2 mb-5">
                        <li className={styleForShoesFilter}>Лето</li>
                        <li className={styleForShoesFilter}>Зима</li>
                        <li className={styleForShoesFilter}>Осень</li>
                    </ul>}
            </div>
            <div className='border-t-2 border-[#e0dedc]'>
                <div className='flex flex-row justify-between'>
                    <p
                        className='
                  text-[#929292]
                  mb-4'
                    >Пол</p>
                    <IoIosArrowDown
                        onClick={() => toggleActive(3)}
                        className='
                        mt-[3px]
                        cursor-pointer
                        text-[#e0dedc]'
                        size={25}/>
                </div>
                {open[3].active &&
                    <ul className="flex flex-col gap-2 mb-5">
                        <li className="flex">
                            <input className="mr-3 cursor-pointer" type={'checkbox'}/>
                            <p>Мужское</p>
                        </li>
                        <li className="flex">
                            <input className="mr-3 cursor-pointer" type={'checkbox'}/>
                            <p>Женское</p>
                        </li>
                    </ul>}
            </div>
        </div>
    )
}

export default ShoesFilter