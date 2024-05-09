import { createSlice } from '@reduxjs/toolkit'

export const filtersSlice = createSlice({
    name: 'filters',
    initialState: {
        selectedCategory: null,
        selectedPrice: null,
        searchTerm: null,
    },
    reducers: {
        setSelectedCategory: (state, action) => {
            state.selectedCategory = action.payload
        },

        setSelectedPrice: (state, action) => {
            state.selectedPrice = action.payload
        },

        setSearchTerm: ( state, action ) => {
            state.searchTerm = action.payload
        }
    }
})


export const { setSelectedCategory, setSelectedPrice, setSearchTerm  } = filtersSlice.actions