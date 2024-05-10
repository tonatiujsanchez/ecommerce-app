import { createSlice } from '@reduxjs/toolkit'
import { AUTH_STATUS } from '../../constants'


export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        status: AUTH_STATUS.checking,
        hasAuthError: null,
        registrationCompleted:false
    },
    reducers: {
        login: (state, action) => {
            state.user = action.payload
            state.status = AUTH_STATUS.authenticated
            state.hasAuthError = null
        },
        logout: (state) => {
            state.user = null
            state.status = AUTH_STATUS.notAuthenticated
            state.hasAuthError = null
        },
        setHasAuthError: (state, action) => {
            state.hasAuthError = action.payload
        },
        setRegistrationCompleted: (state, action) => {
            state.registrationCompleted = action.payload
        }
    }
})



export const { login, logout, setHasAuthError, setRegistrationCompleted } = authSlice.actions