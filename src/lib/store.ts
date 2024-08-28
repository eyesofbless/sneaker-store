import { configureStore } from '@reduxjs/toolkit'
import basketReducer from '@/lib/features/basket/basketSlice';

export const makeStore = () => {
    return configureStore({
        reducer: {
            basket: basketReducer,
        }
    })
}

export const store = makeStore()




