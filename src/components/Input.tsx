"use client"

import {IoSearchSharp} from "react-icons/io5";
import {useState} from "react";



const Input = () => {
    const [isOpen,setIsOpen] = useState(false)
    return (
        <div>
            <IoSearchSharp
                onClick={() => setIsOpen(!isOpen)}
                className='
                relative
                text-black
                cursor-pointer' size={35}/>
            {isOpen &&
            <div
                className="
                flex
                gap-x-4
                w-[70%]
                bg-white
                rounded-lg
                absolute
                top-[75px]
                right-7
                p-4
                shadow-[0_0_10px_1px_rgba(34,60,80,0.2)]">
                <input
                    className="
                    outline
                    outline-1
                    outline-[#ddd]
                    w-full
                    p-2
                    rounded-lg" type={'search'}/>
                <button
                    className="
                    p-2
                    hover:opacity-75
                    transition
                    text-white
                    bg-blue-600
                    rounded-lg">
                    Найти
                </button>
            </div>}
        </div>
    )
}

export default Input