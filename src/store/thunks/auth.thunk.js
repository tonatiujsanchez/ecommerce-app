import axios from 'axios'
import { toastError } from '../../libs'
import { login, logout, setHasAuthError, setRegistrationCompleted } from '../slices'
import { AUTH_STORAGE_KEY } from '../../constants'


export const createUser = ({ user }) => {
    const url = `${import.meta.env.VITE_BASE_URL}/users`
    return async (dispatch) => {
        try {
            await axios.post(url, user)
            dispatch( setRegistrationCompleted(true) )
        } catch (error) {
            dispatch( setRegistrationCompleted(false) )
            dispatch( setHasAuthError(error.response.data.error) )
            toastError(error.response.data.error)

        }
    }
}


export const startLogin = ({ email, password }) => {
    const url = `${import.meta.env.VITE_BASE_URL}/users/login`
    return async ( dispatch ) => {
        try {
            const { data } = await axios.post( url, { email, password } )
            dispatch( login(data.user) )
            localStorage.setItem(AUTH_STORAGE_KEY, data.token)
        } catch (error) {
            dispatch( setHasAuthError(error.response.data.error) )
            toastError(error.response.data.error)
        }
    }
}

export const checkingAuth = () => {
    const url = `${import.meta.env.VITE_BASE_URL}/users/me`
    return async ( dispatch ) => {

        const token = localStorage.getItem(AUTH_STORAGE_KEY)

        if(!token){
            return dispatch( logout() )
        }

        try {
            const { data } = await axios.get(url, { headers: { 
                'Authorization': `Bearer ${ token }` 
            }})
            dispatch( login(data) )
        } catch (error) {
            toastError(error.response.data.error)
            dispatch( logout() )
            localStorage.removeItem(AUTH_STORAGE_KEY)
        }

    }
}

export const startLogout = () => {
    return ( dispatch )=> {
        dispatch( logout() )
        localStorage.removeItem(AUTH_STORAGE_KEY)
    }
}
