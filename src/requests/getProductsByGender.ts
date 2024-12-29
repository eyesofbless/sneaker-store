import {createClient} from "../../supabase/server";

export const getProductsByGender = async (gender?: string, table?: string): Promise<any[]> => {
    const supabase = createClient();

    // Определяем таблицы для запроса
    const tables = table ? [table] : ["shoes", "clothes", "accessories"];

    let req
    switch (gender) {
        case "male":
            req = "Мужское"
            break
        case "female":
            req = "Женское"
            break
        case "all_gen":
            req = "Женское/Мужское"
            break
        default:
            req = ''
    }

    // Функция для выполнения запроса к конкретной таблице
    const combineResults = async (table: string) => {
        const {data, error} = await supabase
            .from(table)
            .select('*')
            .eq('gender', req);

        if (error) {
            console.error(`Error fetching products from ${table}:`, error);
            throw new Error(`Failed to fetch products from ${table}`);
        }

        return data || [];
    };

    // Если бренд не указан, возвращаем пустой массив
    if (!gender) {
        console.warn("No brand specified, returning empty array.");
        return [];
    }

    // Выполняем все запросы параллельно
    const promises = tables.map((table) => combineResults(table));

    // Ожидаем выполнения всех запросов
    const results = await Promise.all(promises);

    // Объединяем результаты в один массив
    const newArr = results.flat();

    return newArr;
};
