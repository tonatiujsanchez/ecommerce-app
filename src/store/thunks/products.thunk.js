import axios from 'axios'
import { setHasError, setIsLoading, setProducts } from '../slices/products.slice'


export const getProducts = () => {
    return async(dispatch) => {
        dispatch(setIsLoading(true))

        try {
            const { data } = await axios.get('https://e-commerce-api-v2.academlo.tech/api/v1/products')
            dispatch(setProducts(data))
        } catch (error) {
            dispatch( setHasError(error.response.data ) )
            console.log(error)
        } finally {
            dispatch(setIsLoading(false))
        }
    }
}
