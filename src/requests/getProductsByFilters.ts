
import {getShoes} from "./getShoes";

import {createClient} from "../../supabase/server";
import {SearchParams} from "../../types";

export const getProductsByFilters = async (
    {searchParams}: SearchParams
) => {

    const supabase = createClient()

    if (!searchParams.brands
        &&
        !searchParams.types
        &&
        !searchParams.genders
        &&
        !searchParams.seasons
        &&
        !searchParams.selectedOption) {
        const allShoes = await getShoes();
        return allShoes;
    }

    let query = supabase
        .from('shoes')
        .select('*');

    if (searchParams.brands && searchParams.brands.length > 0) {
        query = query.filter('brand', 'in', `(${searchParams.brands})`);
    }

    if (searchParams.types && searchParams.types.length > 0) {
        query = query.filter('type', 'in', `(${searchParams.types})`);
    }

    if (searchParams.genders && searchParams.genders.length > 0) {
        query = query.filter('gender', 'in', `(${searchParams.genders})`);
    }

    if (searchParams.seasons && searchParams.seasons.length > 0) {
        query = query.filter('season', 'in', `(${searchParams.seasons})`);
    }

    if (!searchParams.selectedOption) {
        query = query.order('price', {ascending: true})
    }

    if (searchParams.selectedOption === 'price ascending') {
        query = query.order('price', {ascending: true});
    }

    if (searchParams.selectedOption === 'price decreasing') {
        query = query.order('price', {ascending: false});
    }

    if (searchParams.selectedOption === 'date decreasing') {
        query = query.order('created_at', {ascending: false});
    }


    const {data, error} = await query;

    if (error) {
        console.error("Ошибка при выполнении запроса:", error);
    } else {
        console.log("Данные, полученные из базы данных:", data);
    }



    return  (data as any) || []
};
