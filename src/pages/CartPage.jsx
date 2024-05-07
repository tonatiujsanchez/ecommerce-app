import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCart } from '../store/thunks/cart.thunk'
import { CartList, Summary } from '../components'
import './styles/cartPage.css'
export const CartPage = () => {

    const dispatch = useDispatch()
    const { cartProducts } = useSelector(state => state.cart)
    
    useEffect(() => {
        if( cartProducts.length === 0 ) {
            dispatch( getCart() )
        }
    }, [])
    

    return (
        <main className="cart container">
            <h1>Cart</h1>
            <div className="cart__content">
                <CartList cartProducts={ cartProducts }  />
                <Summary />
            </div>
        </main>
    )
}
