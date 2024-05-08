import { createSlice } from '@reduxjs/toolkit'

export const productsSlice = createSlice({
    name: 'products',
    initialState: {
        products: [],
        isLoadingProducts: true,
        hasErrorProducts: null,
        productSelected: null,
    },
    reducers: {
        setProducts: (state, action) => {
            state.products  = action.payload
            state.isLoadingProducts = false
            state.hasErrorProducts  = null
        },
        setIsLoadingProducts: (state, action) => {
            state.isLoadingProducts = action.payload
        },
        setHasErrorProducts: (state, action) => {
            state.hasErrorProducts = action.payload
        },
        setProductSelected: (state, action) => {
            state.productSelected = action.payload
        }
    }
})



export const { 
    setProducts, 
    setIsLoadingProducts, 
    setHasErrorProducts,
    setProductSelected
} = productsSlice.actions