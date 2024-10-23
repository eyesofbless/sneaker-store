import { createClient } from "../../../supabase/client";
import { getBasketProducts } from "@/requests/getBasketProducts";
import { useBasketStore } from "@/stores/basket-store";

const useUpdateProduct = () => {
    const supabaseClient = createClient();

    const {
        fetchBasketProducts,
    }: any = useBasketStore();

    const updateProduct = async ({ product, size, updatedSize }: any) => {
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
            item.item.article == product.article
            &&
            item.size == size
            &&
            item.session_id == sessionId
        );

        console.log(basketProducts)
        console.log(product)
        console.log(sessionId)

        

        // Если продукт уже есть в корзине, увеличиваем количество
        if (matchingProduct) {
            const { error } = await supabaseClient
                .from('baskets')
                .update({ size: updatedSize })
                .eq('item', JSON.stringify(product))
                .eq('id', matchingProduct.id)

            if (error) {
                console.error('Ошибка при обновлении количества:', error.message);
                return false; // Возвращаем false в случае ошибки
            }
        }


        // Перезапрашиваем продукты для обновления состояния
        await fetchBasketProducts();

        return true;
    };

    return updateProduct;
};

export default useUpdateProduct;
