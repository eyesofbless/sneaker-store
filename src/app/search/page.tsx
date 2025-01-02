import {getSearchProducts} from "@/requests/getSearchProducts";

import {searchParamsInterface} from "../../../types";
import React from "react";

import SearchInput from "@/app/search/components/SearchInput";
import ProductsList from "@/components/products-content/ProductsList";

interface SearchProps {
    searchParams: searchParamsInterface
}

const Search: React.FC<SearchProps> = async ({searchParams}) => {


    const models = await getSearchProducts(searchParams.query)

    return (
        <div className="
        flex
        flex-col
        gap-5
        items-center
        justify-center
        mt-[150px]">
            <SearchInput/>
            <div className="
            w-[400px]
            sm:w-[500px]
            lg:w-[900px]
            mb-[50px]
            rounded-lg
            p-4
            shadow-[0_0_10px_1px_rgba(34,60,80,0.2)]">
                {(!searchParams.query || !(models.length > 0)) ?
                    <div className="
                    w-full
                    flex flex-col
                    items-center
                    justify-center">
                        <p>Извините, по вашему запросу ничего не найдено</p>
                        <p className="text-[50px]">:(</p>
                    </div>
                    :
                    <div className="
                    flex
                    flex-col
                    gap-5
                    items-center
                    justify-center">
                        <div className="flex flex-col items-center text-[25px]">
                            <span>
                                РЕЗУЛЬТАТЫ ПО ЗАПРОСУ
                            </span>
                            <span>
                                "{searchParams.query}"
                            </span>

                        </div>
                        <ProductsList models={models}/>
                    </div>}
            </div>
        </div>
    )
}

export default Search