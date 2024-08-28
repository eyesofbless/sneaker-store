import {createClient} from "../../supabase/client";
import {getBasketProducts} from "@/requests/getBasketProducts";

const useAddToBasket = () => {


    const supabaseClient = createClient();


    const addToBasket = async ({product, size}: any) => {
        if (!product) {
            console.error('Product is undefined');
            return false; // Возвращаем false, если продукт не передан
        }

        let sessionId = localStorage?.getItem('session_id');
        if (!sessionId) {
            sessionId = crypto.randomUUID();
            localStorage.setItem('session_id', sessionId);
        }

        const basketProducts = await getBasketProducts();


        const matchingProduct = basketProducts.find((item: any) =>
            item.item.article === product.article &&
            item.size === size
        );

        if (matchingProduct) {
            const { error } = await supabaseClient
                .from('baskets')
                .update({ count: matchingProduct.count + 1 })
                .eq('id', matchingProduct.id);

            if (error) {
                console.error('Ошибка при обновлении количества:', error.message);
                return false; // Возвращаем false в случае ошибки
            } else {
                console.log('Данные после обновления:', );
            }
        } else {
            const { error } = await supabaseClient
                .from('baskets')
                .insert({ session_id: sessionId, item: product, size: size, count: 1 });
            if (error) {
                console.error('Ошибка при добавлении в корзину:', error.message);
                return false; // Возвращаем false в случае ошибки
            }
        }



        console.log('Added to basket');
        return true;
    }

    return addToBasket;
}

export default useAddToBasket;
