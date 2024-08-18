import {createServerComponentClient} from "@supabase/auth-helpers-nextjs";
import {cookies} from "next/headers";
import {getShoes} from "./getShoes";

export const getShoesByFilters = async (
    brands?: string[],
    types?: string[],
    genders?: string[],
    seasons?: string[],
    selectedOption?: string
) => {
    const supabase = createServerComponentClient({
        cookies: cookies
    });

    if (!brands && !types && !genders && !seasons && !selectedOption) {
        const allShoes = await getShoes();
        return allShoes;
    }

    let query = supabase.from('shoes').select('*');

    if (brands && brands.length > 0) {
        query = query.filter('brand', 'in', `(${brands})`);
    }

    if (types && types.length > 0) {
        query = query.filter('type', 'in', `(${types})`);
    }

    if (genders && genders.length > 0) {
        query = query.filter('gender', 'in', `(${genders})`);
    }

    if (seasons && seasons.length > 0) {
        query = query.filter('season', 'in', `(${seasons})`);
    }

    if (!selectedOption) {
        query = query.order('price', {ascending: true})
    }

    if (selectedOption === 'price ascending') {
        query = query.order('price', {ascending: true});
    }

    if (selectedOption === 'price decreasing') {
        query = query.order('price', {ascending: false});
    }

    if (selectedOption === 'date decreasing') {
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
