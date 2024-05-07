import { configureStore } from '@reduxjs/toolkit'
import { authSlice, categoriesSlice, productsSlice, filtersSlice, cartSlice } from './slices'

export const store = configureStore({
    reducer: {
        products: productsSlice.reducer,
        categories: categoriesSlice.reducer,
        auth: authSlice.reducer,
        filters: filtersSlice.reducer,
        cart: cartSlice.reducer,
    },
})