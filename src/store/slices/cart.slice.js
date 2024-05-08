import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartProducts: [],
        hasCartError: null,
        isCartLoading: true
    },
    reducers: {
        setCart: (state, action) => {
            state.cartProducts = action.payload
            state.hasCartError = null
            state.isCartLoading = false
        },
        setHasCartError: (state, action) => {
            state.hasCartError = action.payload
        },
        setIsCartLoading: (state, action) => {
            state.isCartLoading = action.payload
        },
        setAddProductToCart: (state, action) => {
            state.cartProducts.push(action.payload)
        },
        setRemoveProductToCart: (state, action) => {
            state.cartProducts = state.cartProducts.filter(productCart => productCart.id !== action.payload)
        },
        setUpdateCuantityFromProductCart: (state, action) => {
            state.cartProducts = state.cartProducts.map(productCart => {
                if(productCart.id === action.payload.id){
                    productCart.quantity = action.payload.quantity
                }
                return productCart
            })
        }
    }
})



export const { 
        setCart, 
        setAddProductToCart, 
        setRemoveProductToCart, 
        setUpdateCuantityFromProductCart, 
        setHasCartError, 
        setIsCartLoading
    } = cartSlice.actions