import { createClient } from "../../supabase/server";
import { searchParamsInterface } from "../../types";

export const getProductsByFilters = async (
    searchParams: searchParamsInterface,
    table?: string
) => {
    const supabase = createClient();
    const tables = table ? [table] : ["shoes", "clothes", "accessories"];

    const combineResults = async (table: string) => {
        let query = supabase.from(table).select();

        if (searchParams?.brands && searchParams.brands.length > 0) {
            query = query.filter("brand", "in", `(${searchParams.brands})`);
        }
        if (searchParams?.types && searchParams.types.length > 0) {
            query = query.filter("type", "in", `(${searchParams.types})`);
        }
        if (searchParams?.genders && searchParams.genders.length > 0) {
            query = query.filter("gender", "in", `(${searchParams.genders})`);
        }
        if (searchParams?.seasons && searchParams.seasons.length > 0) {
            query = query.filter("season", "in", `(${searchParams.seasons})`);
        }

        if (!searchParams?.selectedOption) {
            query = query.order("price", { ascending: true });
        }
        if (searchParams?.selectedOption === "price ascending") {
            query = query.order("price", { ascending: true });
        }
        if (searchParams?.selectedOption === "price decreasing") {
            query = query.order("price", { ascending: false });
        }
        if (searchParams?.selectedOption === "date decreasing") {
            query = query.order("created_at", { ascending: false });
        }

        const { data, error } = await query;

        if (error) {
            console.error("Ошибка при выполнении запроса:", error);
        } else {
            console.log("Данные, полученные из базы данных:", data);
        }

        return (data as any) || [];
    };

    const promises = tables.map((table) => combineResults(table));
    const results = await Promise.all(promises);

    // Убираем дубликаты по уникальному полю, например, 'id'
    const uniqueResults = results.flat().filter((item, index, array) =>
        array.findIndex((t) => t.id === item.id) === index
    );



    return uniqueResults;
};
