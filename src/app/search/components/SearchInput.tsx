'use client'

import {usePathname, useRouter, useSearchParams} from "next/navigation";
import {useDebouncedCallback} from "use-debounce";
import React from "react";


const SearchInput = () => {

    const searchParams = useSearchParams();
    const pathname = usePathname();
    const {replace} = useRouter();


    const handleSearch = useDebouncedCallback((term: string) => {
        const params = new URLSearchParams(searchParams);
        if (term) {
            params.set('query', term);
        } else {
            params.delete('query');
        }
        replace(`${pathname}?${params.toString()}`);
    }, 300);


    return (
        <div className="
        flex
        flex-col
        items-center
        justify-between">
            <div className="
                    flex
                    w-[300px]
                    sm:w-[500px]
                    bg-white
                    rounded-lg
                    p-4
                    shadow-[0_0_10px_1px_rgba(34,60,80,0.2)]
                ">
                <input
                    onChange={(e) => {
                        handleSearch(e.target.value);
                    }}
                    defaultValue={searchParams.get('query')?.toString()}
                    placeholder="Что хотите найти?"
                    className="
                    outline
                    outline-1
                    w-full
                    outline-[#ddd]
                    p-3
                    rounded-lg"
                    type='search'
                />
            </div>
        </div>
    )
}

export default SearchInput