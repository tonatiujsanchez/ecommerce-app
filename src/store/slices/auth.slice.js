import { createSlice } from '@reduxjs/toolkit'
import { AUTH_STATUS } from '../../constants'


export const authSlice = createSlice({
   name: 'auth',
   initialState: {
       user: null,
       status: AUTH_STATUS.checking,
       hasError: null,
       isLoading: false,
   },
   reducers: {
       setUser: (state, action ) => {
           state.user     = action.payload
           state.status   = AUTH_STATUS.authenticated
           state.hasError = false
       },
       setIsLoading:(state, action) => {
           state.isLoading = action.payload
       }
    }
})



export const { setUser, setIsLoading } = authSlice.actions