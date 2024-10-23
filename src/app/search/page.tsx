import {getSearchProducts} from "@/requests/getSearchProducts";
import SearchResults from "@/app/search/components/SearchResults";
import {getProductsByFilters} from "@/requests/getProductsByFilters";
import {SearchParams} from "../../../types";
import {getFilters} from "@/requests/getFilters";

const Search = async ({searchParams}: SearchParams) => {

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