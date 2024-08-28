import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {getBasketProducts} from "@/requests/getBasketProducts";

// Асинхронное действие для получения продуктов корзины
export const fetchBasketProducts = createAsyncThunk(
    'basket/fetchBasketProducts',
    async () => {
        const response = await getBasketProducts();
        return response;
    }
);

// Асинхронное действие для добавления продукта в корзину


interface initialStateTypes {
    products: any[];
    status: string;
    error: string | undefined | null;
}

const initialState: initialStateTypes = {
    products: [],
    status: 'idle',
    error: null,
}

const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        // Здесь можно добавить другие синхронные редьюсеры, если они необходимы
    },
    extraReducers: (builder) => {
        builder
            // Обработка действия fetchBasketProducts
            .addCase(fetchBasketProducts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchBasketProducts.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.products = action.payload; // сохраняем полученные продукты в state
            })
            .addCase(fetchBasketProducts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            // Обработка действия insertProductsToBasket

    },
});

export default basketSlice.reducer;
