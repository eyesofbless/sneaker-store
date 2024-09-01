import { createClient } from "../../supabase/server";

export const getSearchProducts = async (query: string) => {

    const tables = ['shoes', 'clothes', 'accessories'];

    const combineResults = async (table?: any) => {
        const supabase = createClient();
        const { data, error } = await supabase
            .from(table)
            .select()
            .or(`brand.ilike.%${query}%,model.ilike.%${query}%`)


        if (error) {
            console.error(`Ошибка при запросе из таблицы ${table}:`, error);
            return [];
        }

        return data || [];
    };

    // Создаем массив промисов для выполнения запросов
    const promises = tables.map(table => combineResults(table));

    // Ожидаем выполнения всех промисов
    const results = await Promise.all(promises);

    // Объединяем все результаты в один массив
    const newArr = results.flat();

    return newArr.slice(0,3);
};
