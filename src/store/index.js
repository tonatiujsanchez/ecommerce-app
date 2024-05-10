import { configureStore } from '@reduxjs/toolkit'
import { authSlice, categoriesSlice, productsSlice, filtersSlice, cartSlice, uiSlice, purchasesSlice } from './slices'

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        cart: cartSlice.reducer,
        categories: categoriesSlice.reducer,
        filters: filtersSlice.reducer,
        products: productsSlice.reducer,
        purchases: purchasesSlice.reducer,
        ui: uiSlice.reducer,
    },
})