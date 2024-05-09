import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCart } from '../store/thunks/cart.thunk'
import { CartList, MainLoader, ShoppingCartIcon, Summary } from '../components'
import './styles/cartPage.css'
export const CartPage = () => {

    const dispatch = useDispatch()
    const { cartProducts, isCartLoading } = useSelector(state => state.cart)
    
    useEffect(() => {
        if( cartProducts.length === 0 ) {
            dispatch( getCart() )
        }
    }, [])
    
    if( isCartLoading ){
        return (
            <div className="cart-loader__content">
                <MainLoader />
            </div>
        )
    }

    if( cartProducts.length === 0 ){
        return (
            <div className="cart-empty">
                <ShoppingCartIcon />
                <p>Your shopping cart is empty</p>
            </div>
        )
    }

    return (
        <main className="cart">
            <div className="cart__container">
                <h1 className="cart__heading">Cart</h1>
                <div className="cart__content">
                    <CartList cartProducts={ cartProducts }  />
                    <Summary cartProducts={ cartProducts } />
                </div>
            </div>
        </main>
    )
}
