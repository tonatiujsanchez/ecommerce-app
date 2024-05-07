import { AUTH_STORAGE_KEY } from "../constants"

export const getHeaders = () => {
    const token = localStorage.getItem(AUTH_STORAGE_KEY)
    return { 
        'Authorization': `Bearer ${ token }` 
    }
}