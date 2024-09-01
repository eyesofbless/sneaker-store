"use client"

import {IoSearchSharp} from "react-icons/io5";
import React, {useState} from "react";
import {usePathname, useRouter, useSearchParams} from "next/navigation";
import SearchResults from "@/components/SearchResults";

interface InputProps {
    foundProducts?:any
}

const Input:React.FC<InputProps> = ({foundProducts}:any) => {
    const [isOpen,setIsOpen] = useState(false)

    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const handleSearch = (term:string) => {
        const params = new URLSearchParams(searchParams);
        if (term) {
            params.set('query', term);
        } else {
            params.delete('query');
        }
        replace(`${pathname}?${params.toString()}`);
    }

    return (
        <div>
            <IoSearchSharp
                onClick={() => setIsOpen(!isOpen)}
                className='
                relative
                text-black
                cursor-pointer
                ' size={35}/>
            {isOpen &&
            <div
                className="
                flex
                flex-col
                w-[350px]
                sm:w-[500px]
                bg-white
                rounded-lg
                absolute
                top-[75px]
                right-7
                p-4
                shadow-[0_0_10px_1px_rgba(34,60,80,0.2)]">
                <div
                    className="
                    flex
                    gap-x-4">
                    <input
                        onChange={(e) => {
                            handleSearch(e.target.value);
                        }}
                        defaultValue={searchParams.get('query')?.toString()}
                        placeholder="Что хотите найти?"
                        className="
                    outline
                    outline-1
                    outline-[#ddd]
                    w-full
                    p-3
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
                </div>
                <div>
                    {foundProducts && foundProducts.map((product:any) =>
                        <SearchResults product={product} />
                    )}
                </div>
            </div>}
        </div>
    )
}

export default Input