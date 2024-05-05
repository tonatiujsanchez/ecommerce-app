import { createSlice } from '@reduxjs/toolkit'

export const filtersSlice = createSlice({
    name: 'filters',
    initialState: {
        selectedCategory: null,
        selectedPrice: null
    },
    reducers: {
        setSelectedCategory: (state, action) => {
            state.selectedCategory = action.payload
        },
        setSelectedPrice: (state, action) => {
            state.selectedPrice = action.payload
        }
    }
})


export const { setSelectedCategory, setSelectedPrice  } = filtersSlice.actions