import axios from 'axios'
import {setProducts, setIsLoadingProducts, setHasErrorProducts } from '../slices/products.slice'


export const getProducts = () => {
    return async(dispatch) => {
        try {
            const { data } = await axios.get('https://e-commerce-api-v2.academlo.tech/api/v1/products')
            dispatch(setProducts(data))
        } catch (error) {
            console.log(error)
            dispatch( setHasErrorProducts('There was an error loading the products') )
            dispatch(setIsLoadingProducts(false))
        }
    }
}
