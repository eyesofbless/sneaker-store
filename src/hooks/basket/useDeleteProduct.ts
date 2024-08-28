import {createClient} from "../../../supabase/client";
import {getBasketProducts} from "@/requests/getBasketProducts";
import {useBasketStore} from "@/stores/basket-store";

const useDeleteProduct = () => {
    const supabaseClient = createClient();

    const {
        fetchBasketProducts,
    }: any = useBasketStore();

    const deleteProduct = async ({product, size, removeProduct}:
                                        { product: any, size: number, removeProduct:boolean}) => {
        if (!product) {
            console.error('Product is undefined');
            return false; // Возвращаем false, если продукт не передан
        }


        // Получаем текущие продукты в корзине
        const basketProducts = await getBasketProducts();

        // Ищем продукт с таким же артикулом и размером
        const matchingProduct = basketProducts.find((item: any) =>
            item.item.article === product.article && item.size === size
        );

        // Если продукт уже есть в корзине, уменьшаем количество
        if (!removeProduct) {
            const {error} = await supabaseClient
                .from('baskets')
                .update({count: matchingProduct.count - 1})
                .eq('id', matchingProduct.id);

            if (error) {
                console.error('Ошибка при обновлении количества:', error.message);
                return false; // Возвращаем false в случае ошибки
            }
        } else {
            // Иначе удаляем продукт
            const {error} = await supabaseClient
                .from('baskets')
                .delete()
                .eq('id', matchingProduct.id);

            if (error) {
                console.error('Ошибка при добавлении в корзину:', error.message);
                return false; // Возвращаем false в случае ошибки
            }
        }

        // Перезапрашиваем продукты для обновления состояния
        await fetchBasketProducts();

        return true;
    };

    return deleteProduct;
};

export default useDeleteProduct;
