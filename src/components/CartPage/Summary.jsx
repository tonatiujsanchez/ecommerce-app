import PropTypes from 'prop-types'
import { PrimaryButton } from '../../components'
import { currencyFormatMXN } from '../../utilities'
import './styles/summary.css'

export const Summary = ({ cartProducts }) => {

    const totalProducts = cartProducts.reduce(( total, product) => product.quantity + total ,0)
    const subtotal = cartProducts.reduce(( total, { product, quantity }) => (product.price * quantity) + total ,0)
    const iva = (subtotal * 0.16 ).toFixed(2)
    const total = subtotal + Number(iva)

    return (
        <section className="summary">
            <h2>Summary</h2>
            <ul className="summary__list">
                <li className="summary__item">
                    <span>Total products</span>
                    <span>{ totalProducts }</span>
                </li>
                <li className="summary__item">
                    <span>Subtotal</span>
                    <span>{ currencyFormatMXN(subtotal) }</span>
                </li>
                <li className="summary__item">
                    <span>IVA(16%)</span>
                    <span>{ currencyFormatMXN(iva) }</span>
                </li>
                <li className="summary__item summary__item--total">
                    <span>Total</span>
                    <span>{ currencyFormatMXN(total) }</span>
                </li>
            </ul>
            <PrimaryButton>Checkout</PrimaryButton>
        </section>
    )
}

Summary.propTypes = {
    cartProducts: PropTypes.array
}