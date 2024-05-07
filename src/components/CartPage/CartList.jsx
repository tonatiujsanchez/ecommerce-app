import PropTypes from 'prop-types'
import { CartItem } from './CartItem'
import './styles/cartList.css'

export const CartList = ({ cartProducts }) => {

    return (
        <section>
            <ul className="cart-list">
                { cartProducts.map(cartProduct => (
                    <CartItem key={ cartProduct.id } cartProduct={ cartProduct } />
                ))}
            </ul>
        </section>
    )
}

CartList.propTypes = {
    cartProducts: PropTypes.array
}
