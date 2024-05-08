import axios from 'axios'
import {setProducts, setIsLoadingProducts, setHasErrorProducts, setProductSelected } from '../slices/products.slice'


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


export const getProductById = ( id ) => {
    return async(dispatch) => {
        dispatch(setIsLoadingProducts(true))
        try {
            const { data } = await axios.get(`https://e-commerce-api-v2.academlo.tech/api/v1/products/${ id }`)
            dispatch( setProductSelected(data) )
            console.log(data)
        } catch (error) {
            console.log(error)
            dispatch( setHasErrorProducts('There was an error loading the product') )
        } finally {
            dispatch(setIsLoadingProducts(false))
        }
    }
}