import {getSearchProducts} from "@/requests/getSearchProducts";
import SearchResults from "@/app/search/components/SearchResults";
import {getAllBrands, getBrands} from "@/requests/getBrands";
import {getProductsByFilters} from "@/requests/getProductsByFilters";
import {SearchParams} from "../../../types";

const Search = async ({searchParams}: SearchParams) => {

    let shoesModels = await getProductsByFilters(
        {searchParams}
    );

    let foundProducts
    if (searchParams?.query) {
        foundProducts = await getSearchProducts(searchParams.query);
    }



    let brands = await getAllBrands();
    brands = brands.filter((item: any, index: number) => brands.indexOf(item) === index);


    return (
        <div>
            <SearchResults
                foundProducts={foundProducts}
                brands={brands}
                searchParams={searchParams}
                models={shoesModels}/>
        </div>
    )
}

export default Search