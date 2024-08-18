import {useSupabaseClient} from "@supabase/auth-helpers-react";


const useAddToBasket = () => {


    const supabaseClient = useSupabaseClient();


    const addToBasket = async ({product,size}:any) => {
        if (!product) {
            console.error('Product is undefined');
            return false; // Возвращаем false, если продукт не передан
        }

        let sessionId = localStorage?.getItem('session_id');
        if (!sessionId) {
            sessionId = crypto.randomUUID();
            localStorage.setItem('session_id', sessionId);
        }


        // Получаем текущие товары в корзине
        const { data: basketData, error: basketError } = await supabaseClient
            .from('baskets')
            .select('items')
            .eq('session_id', sessionId);

        if (basketError) {
            console.error('Error fetching basket:', basketError.message);
            return false; // Возвращаем false в случае ошибки
        }


        // Добавляем новый продукт в корзину
        const { data, error } = await supabaseClient
            .from('baskets')
            .insert({ session_id: sessionId, items: product,size: size });

        if (error) {
            console.error('Error adding to basket:', error.message);
            return false; // Возвращаем false в случае ошибки
        }

        console.log('Added to basket:', data);
        return true;
    }

    return addToBasket;
}

export default useAddToBasket;
