import axios from 'axios'
import { toastError } from '../../libs'
import {setProducts, setIsLoadingProducts, setHasErrorProducts, setProductSelected, setSimilarProducts } from '../slices/products.slice'


export const getProducts = () => {
    return async(dispatch) => {
        try {
            const { data } = await axios.get(`${import.meta.env.VITE_BASE_URL}/products`)
            dispatch(setProducts(data))
        } catch (error) {
            console.log(error)
            toastError(error.response.data)
            dispatch( setHasErrorProducts('There was an error loading the products') )
        } finally {
            dispatch(setIsLoadingProducts(false))
        }
    }
}

export const getProductsByCategory = (categoryId) => {
    return async(dispatch) => {
        try {
            const { data } = await axios.get(`${import.meta.env.VITE_BASE_URL}/products?categoryId=${categoryId}`)
            dispatch(setSimilarProducts(data))
        } catch (error) {
            console.log(error)
            toastError(error.response.data)
            dispatch( setHasErrorProducts('There was an error loading the products') )
        }
    }
}


export const getProductById = ( id ) => {
    return async(dispatch) => {
        dispatch(setIsLoadingProducts(true))
        try {
            const { data } = await axios.get(`${import.meta.env.VITE_BASE_URL}/products/${ id }`)
            dispatch( setProductSelected(data) )
        } catch (error) {
            console.log(error)
            toastError(error.response.data)
            dispatch( setHasErrorProducts('There was an error loading the product') )
        } finally {
            dispatch(setIsLoadingProducts(false))
        }
    }
}