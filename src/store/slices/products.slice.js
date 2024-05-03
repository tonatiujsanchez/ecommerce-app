import { createSlice } from '@reduxjs/toolkit';

export const productsSlice = createSlice({
   name: 'products',
   initialState: {
       products: [],
       isLoading: false,
       hasError : null
   },
   reducers: {
       setProducts: (state, action ) => {
           state.products = action.payload
       },
       setIsLoading: (state, action) => {
           state.isLoading = action.payload
       },
       setHasError: (state, action) => {
           state.hasError = action.payload
       }
    }
});



export const { setProducts, setIsLoading, setHasError } = productsSlice.actions;