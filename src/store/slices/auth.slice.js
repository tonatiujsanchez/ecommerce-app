import { createSlice } from '@reduxjs/toolkit'

export const authStatus = {
    checking: 'checking',
    notAuthenticated: 'not-authenticated',
    authenticated: 'authenticated'
}

export const authSlice = createSlice({
   name: 'auth',
   initialState: {
       user: null,
       status: authStatus.checking,
       hasError: null,
       isLoading: false,
   },
   reducers: {
       setUser: (state, action ) => {
           state.user     = action.payload
           state.status   = authStatus.authenticated
           state.hasError = false
       },
       setIsLoading:(state, action) => {
           state.isLoading = action.payload
       }
    }
});



export const { setUser, setIsLoading } = authSlice.actions;