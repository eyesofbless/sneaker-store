import { createClient } from "../../../supabase/client";
import { getBasketProducts } from "@/requests/getBasketProducts";
import { useBasketStore } from "@/stores/basket-store";

const useAddProduct = () => {
    const supabaseClient = createClient();

    const {
        fetchBasketProducts,
    }: any = useBasketStore();

    const addProduct = async ({ product, size }: any) => {
        if (!product) {
            console.error('Product is undefined');
            return false; // Возвращаем false, если продукт не передан
        }

        let sessionId = localStorage?.getItem('session_id');
        if (!sessionId) {
            sessionId = crypto.randomUUID();
            localStorage.setItem('session_id', sessionId);
        }

        // Получаем текущие продукты в корзине
        const basketProducts = await getBasketProducts();

        // Ищем продукт с таким же артикулом и размером
        const matchingProduct = basketProducts.find((item: any) =>
            item.item.article === product.article && item.size === size
        );

        // Если продукт уже есть в корзине, увеличиваем количество
        if (matchingProduct) {
            const { error } = await supabaseClient
                .from('baskets')
                .update({ count: matchingProduct.count + 1 })
                .eq('id', matchingProduct.id);

            if (error) {
                console.error('Ошибка при обновлении количества:', error.message);
                return false; // Возвращаем false в случае ошибки
            }
        } else {
            // Если продукт еще нет в корзине, добавляем его
            const { error } = await supabaseClient
                .from('baskets')
                .insert({ session_id: sessionId, item: product, size: size, count: 1 });

            if (error) {
                console.error('Ошибка при добавлении в корзину:', error.message);
                return false; // Возвращаем false в случае ошибки
            }
        }

        // Обновляем локальное состояние после успешного обновления базы данных


        // Перезапрашиваем продукты для обновления состояния
        await fetchBasketProducts();

        return true;
    };

    return addProduct;
};

export default useAddProduct;
