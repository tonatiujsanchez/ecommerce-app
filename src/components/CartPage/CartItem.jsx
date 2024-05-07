import PropTypes from 'prop-types'
import './styles/cartItem.css'

export const CartItem = ({ cartProduct }) => {

    const { product, quantity } = cartProduct

    return (
        <li className="cart-item">
            <figure className="cart-item__figure">
                <img src={ product.images[0].url } alt={ product.title } />
            </figure>
            <div>
                <h3>{ product.title }</h3>
                <p>{ quantity } x ${ product.price }.00</p>
                <div className="cart-item__form">
                    <button
                        type="button"
                        className="cart-item__form-button"
                    >
                        -1
                    </button>
                    <input 
                        type="number" 
                        value={ quantity || 1}
                        onChange={ () => {console.log('onChange...')} }
                        className="cart-item__form-input"
                    />
                    <button
                        type="button"
                        className="cart-item__form-button"
                    >
                        +1
                    </button>
                </div>
                <p><strong>Total: </strong> ${ quantity * product.price }.00</p>
            </div>
        </li>
    )
}

CartItem.propTypes = {
    cartProduct: PropTypes.object
}