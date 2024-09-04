"use client"

import { IoSearchSharp } from "react-icons/io5";
import React, { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import SearchItem from "@/components/header/SearchItem";
import Link from "next/link";
import { useSearchStore } from "@/stores/search-store";
import { useDebouncedCallback } from "use-debounce";

interface InputProps {
    foundProducts?: any
}

const Input: React.FC<InputProps> = ({ foundProducts }: any) => {
    const [isOpen, setIsOpen] = useState(false);

    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();
    const { setQuery }: any = useSearchStore();
    const { setSearchProducts }: any = useSearchStore();
    const router = useRouter();

    // Блокировка прокрутки при открытом сайдбаре
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        // Очистка эффекта при размонтировании компонента
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    const handleSearch = useDebouncedCallback((term: string) => {
        const params = new URLSearchParams(searchParams);
        if (term) {
            params.set('query', term);
        } else {
            params.delete('query');
        }
        replace(`${pathname}?${params.toString()}`);
    }, 300);

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleSearch(e.currentTarget.value);
            setSearchProducts(foundProducts || []);
            setIsOpen(false);
            router.push('/search')
        }
    };

    return (
        <div>
            <IoSearchSharp
                onClick={() => setIsOpen(!isOpen)}
                className='relative text-black cursor-pointer'
                size={35}
            />
            {isOpen &&
                <div className="
                    z-50 flex flex-col w-[300px] sm:w-[500px] bg-white rounded-lg absolute top-[75px] right-7 p-4 shadow-[0_0_10px_1px_rgba(34,60,80,0.2)]
                ">
                    <div className="flex gap-x-4">
                        <input
                            onChange={(e) => {
                                handleSearch(e.target.value);
                                setQuery(e.target.value);
                            }}
                            onKeyDown={handleKeyDown}
                            defaultValue={isOpen ? searchParams.get('query')?.toString() : ""}
                            placeholder="Что хотите найти?"
                            className="outline outline-1 outline-[#ddd] w-full p-3 rounded-lg"
                            type='search'
                        />
                        {foundProducts && foundProducts.length === 0 ?
                            <button
                                className="p-2 cursor-auto text-white bg-gray-400 rounded-lg"
                            >
                                Найти
                            </button>
                            :
                            <Link
                                onClick={() => {
                                    setSearchProducts(foundProducts || []);
                                    setIsOpen(false);
                                }}
                                className="
                                    flex p-2 hover:opacity-75 transition text-white items-center bg-blue-600 rounded-lg
                                "
                                href='/search'
                            >
                                <p>Найти</p>
                            </Link>
                        }
                    </div>
                    <div>
                        {foundProducts && foundProducts.slice(0, 4).map((product: any) =>
                            <SearchItem key={product.id} product={product} />
                        )}
                    </div>
                </div>}
            {isOpen && <div className="fixed inset-0" onClick={() => setIsOpen(false)}></div>}
        </div>
    );
}

export default Input;
