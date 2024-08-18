import {useEffect, useState} from "react";
import {useSupabaseClient} from "@supabase/auth-helpers-react";

const useGetBasketProducts = () => {

    const supabaseClient = useSupabaseClient();

    const [basketProducts, setBasketProducts] = useState<{items:any}[]>();

    useEffect(() => {
        const checkProductInCart = async () => {
            let sessionId = localStorage?.getItem('session_id');
            if (!sessionId) {
                // Если нет, создаем новый уникальный идентификатор
                sessionId = crypto.randomUUID();
                localStorage.setItem('session_id', sessionId);
            }

            const { data, error } = await supabaseClient
                .from('baskets')
                .select('items')
                .eq('session_id', sessionId)
            if (error) {
                console.log(error);
                return;
            }

            setBasketProducts(data)
        };
        checkProductInCart();
    }, [supabaseClient,basketProducts]);
    return basketProducts
}

export default useGetBasketProducts;