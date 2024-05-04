import { createSlice } from '@reduxjs/toolkit';

export const categoriesSlice = createSlice({
   name: 'categories',
   initialState: {
       categories:[],
       isLoading: true,
       hasError: null,
   },
   reducers: {
       setCategories: (state, action ) => {
           state.categories = action.payload
       },
    }
});



export const { increment } = categoriesSlice.actions;