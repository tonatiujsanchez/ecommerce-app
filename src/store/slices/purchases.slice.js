import { createSlice } from '@reduxjs/toolkit'

export const purchasesSlice = createSlice({
    name: 'purchases',
    initialState: {
        purchases: [],
        hasPurcharsesError: null,
        isPurchasesLoading: true
    },
    reducers: {
        setPurchases: (state, action) => {
            state.purchases = action.payload
        },
        setHasPurcharsesError: (state, action) => {
            state.hasPurcharsesError = action.payload
        },
        setIsPurchasesLoading: (state, action) => {
            state.isPurchasesLoading = action.payload
        }
    }
})


export const { setPurchases, setHasPurcharsesError, setIsPurchasesLoading } = purchasesSlice.actions    