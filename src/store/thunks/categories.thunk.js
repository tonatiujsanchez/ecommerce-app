import axios from 'axios'
import { setCategories, setHasErrorCategories, setIsLoadingCategories } from '../slices'

export const getCategories = () => {
    return async( dispatch ) => {
        try {         
            const { data } = await axios.get('https://e-commerce-api-v2.academlo.tech/api/v1/categories')
            dispatch( setCategories(data) )
        } catch (error) {
            console.log(error)
            dispatch(setCategories([]))
            dispatch(setHasErrorCategories('There was an error loading the categories'))
            dispatch(setIsLoadingCategories(false))
        }
    }
}
