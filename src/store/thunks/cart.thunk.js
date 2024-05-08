import axios from 'axios'
import { setAddProductToCart, setCart, setHasCartError, setRemoveProductToCart, setUpdateCuantityFromProductCart } from '../slices'
import { getHeaders } from '../../utilities'



export const getCart = () => {
    return async( dispatch ) => {
        try {
            const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/cart'
            const { data } = await axios.get(url, { headers: getHeaders() })
            dispatch( setCart(data) )
        } catch (error) {
            dispatch( setCart([]) )
            dispatch( setHasCartError(error.response.data) )
        }
    }
}

export const addProductToCart = (product) => {
    return async( dispatch ) => {
        try {
            const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/cart'
            const body = {
                quantity :1, 
                productId:product.id
            }
            const { data } = await axios.post(url, body, { headers: getHeaders() })
            data.product = product            
            dispatch( setAddProductToCart(data) )
        } catch (error) {
            dispatch( setHasCartError(error.response.data) )
        }
    }
}

export const removeProductToCart = ( idProduct ) => {
    return async( dispatch ) => {
        const url = `https://e-commerce-api-v2.academlo.tech/api/v1/cart/${ idProduct }`
        try {
            await axios.delete(url, { headers: getHeaders() })
            dispatch( setRemoveProductToCart(idProduct) )
        } catch (error) {
            dispatch( setHasCartError(error.response.data) )
        }
    }
}

export const updateQuantityToCartProduct = (idCartProduct, quantity) => {
    return async( dispatch ) => {
        try {
            const url = `https://e-commerce-api-v2.academlo.tech/api/v1/cart/${ idCartProduct }`
            const { data } = await axios.put(url, { quantity }, { headers: getHeaders() })
            dispatch(setUpdateCuantityFromProductCart({ id: data.id, quantity }))
        } catch (error) {
            dispatch( setHasCartError(error.response.data) )
        }
    }
}