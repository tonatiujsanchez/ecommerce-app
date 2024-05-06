import axios from 'axios'
import { login, logout, setHasAuthError, setRegistrationCompleted } from '../slices'
import { AUTH_STORAGE_KEY } from '../../constants'


export const createUser = ({ user }) => {
    const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/users'
    return async (dispatch) => {
        try {
            await axios.post(url, user)
            dispatch( setRegistrationCompleted(true) )
        } catch (error) {
            dispatch( setRegistrationCompleted(false) )
            dispatch( setHasAuthError(error.response.data.error) )
        }
    }
}


export const startLogin = ({ email, password }) => {
    const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/users/login'
    return async ( dispatch ) => {
        try {
            const { data } = await axios.post( url, { email, password } )
            dispatch( login(data.user) )
            localStorage.setItem(AUTH_STORAGE_KEY, data.token)
        } catch (error) {
            dispatch( setHasAuthError(error.response.data.error) )
        }
    }
}

export const checkingAuth = () => {
    const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/users/me'
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
