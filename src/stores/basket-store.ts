import {create} from "zustand";
import {getBasketProducts} from "@/requests/getBasketProducts";

export const useBasketStore = create((set) => ({
    basketProducts: [],
    loading: false,
    basketProductsSum: 0,
    basketProductsCount: 0,



    // Запрос на все товары в корзине
    fetchBasketProducts: async () => {
        set({loading: true});
        try {
            const products = await getBasketProducts();
            set({basketProducts: products});
            set({basketProductsCount: products.reduce((total: any, item: any) => total + item.count, 0)});
            set({basketProductsSum: products.reduce((total: any, item: any) => total + item.item.price * item.count, 0)});
        } catch (error) {
            console.error("Failed to fetch basket products:", error);
        } finally {
            set({loading: false});
        }
    }
}));
