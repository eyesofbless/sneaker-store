import {getSearchProducts} from "@/requests/getSearchProducts";
import SearchResults from "@/app/search/components/SearchResults";
import {getProductsByFilters} from "@/requests/getProductsByFilters";
import {searchParamsInterface} from "../../../types";
import React from "react";

interface SearchProps {
    searchParams: searchParamsInterface
}

const Search:React.FC<SearchProps> = async ({searchParams}) => {

    let shoesModels = await getProductsByFilters(
        searchParams
    );


    let foundProducts
    if (searchParams?.query) {
        foundProducts = await getSearchProducts(searchParams.query);
    }


    return (
        <div>
            <SearchResults
                foundProducts={foundProducts}
                searchParams={searchParams}
                models={shoesModels}
                />
        </div>
    )
}

export default Search