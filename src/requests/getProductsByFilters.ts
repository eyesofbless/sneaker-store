import { createClient } from "../../supabase/server";
import { SearchParams } from "../../types";

// Функция принимает два отдельных аргумента: searchParams и table (опционально)
export const getProductsByFilters = async (
    searchParams: SearchParams["searchParams"], // Корректный тип для searchParams
    table?: string // Таблица передается как строка
) => {
    const supabase = createClient();

    // Список таблиц для поиска, если не передана конкретная таблица
    const tables = table ? [table] : ["shoes", "clothes", "accessories"];

    // Функция для получения данных из конкретной таблицы
    const combineResults = async (table: string) => {
        let query = supabase.from(table).select();

        // Применение фильтров
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

        // Выполнение запроса к базе данных
        const { data, error } = await query;

        if (error) {
            console.error("Ошибка при выполнении запроса:", error);
        } else {
            console.log("Данные, полученные из базы данных:", data);
        }

        return (data as any) || [];
    };

    // Вызов функции combineResults для каждой таблицы
    const promises = tables.map((table) => combineResults(table));

    // Ожидаем выполнения всех запросов
    const results = await Promise.all(promises);

    // Объединяем результаты в один массив
    const newArr = results.flat();

    return newArr;
};
