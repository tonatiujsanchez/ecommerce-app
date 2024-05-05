import { createSlice } from '@reduxjs/toolkit'

export const categoriesSlice = createSlice({
    name: 'categories',
    initialState: {
        categories: [],
        isLoadingCategories: true,
        hasErrorCategories: null,
    },
    reducers: {
        setCategories: (state, action) => {
            state.categories = action.payload
            state.isLoadingCategories = false
            state.hasErrorCategories  = null
        },
        setIsLoadingCategories: (state, action) => {
            state.isLoadingCategories = action.payload
        },
        setHasErrorCategories: (state, action) => {
            state.hasErrorCategories = action.payload
        },
       

    }
})



export const { 
    setCategories, 
    setIsLoadingCategories, 
    setHasErrorCategories, 
} = categoriesSlice.actions