import axios from 'axios'
import { setIsPurchasesLoading, setPurchases } from '../slices/purchases.slice'
import { getHeaders } from '../../utilities'
import { setCart } from '../slices'


export const getPurchases = () => {

    return async ( dispatch ) => {
        const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/purchases'
        try {
            dispatch(setIsPurchasesLoading(true))
            const { data } = await axios.get(url, { headers: getHeaders() })
            dispatch(setPurchases(data))
        } catch (error) {
            console.log(error)
        }finally {
            dispatch(setIsPurchasesLoading(false))
        }
    }
}

export const postPurchases = () => {
    return async( dispatch )=> {
        const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/purchases'
        try {
            await axios.post(url, {}, { headers: getHeaders() })
            dispatch( setCart([]) )
        } catch (error) {
            console.log(error)
        }
    }
}