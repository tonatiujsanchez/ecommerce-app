import axios from 'axios'
import { toastError } from '../../libs'
import { setCategories, setHasErrorCategories, setIsLoadingCategories } from '../slices'

export const getCategories = () => {
    return async( dispatch ) => {
        try {         
            const { data } = await axios.get(`${import.meta.env.VITE_BASE_URL}/categories`)
            dispatch( setCategories(data) )
        } catch (error) {
            console.log(error)
            toastError(error.response.data)
            dispatch(setCategories([]))
            dispatch(setHasErrorCategories('There was an error loading the categories'))
            dispatch(setIsLoadingCategories(false))
        }
    }
}
