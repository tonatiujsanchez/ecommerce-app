import { useState } from 'react'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { postPurchases } from '../../store/thunks'
import { Loader, PrimaryButton } from '../../components'
import { currencyFormatMXN } from '../../utilities'
import './styles/summary.css'

export const Summary = ({ cartProducts }) => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [isCheckoutLoading, setIsCheckoutLoading] = useState(false)

    const totalProducts = cartProducts.reduce(( total, product) => product.quantity + total ,0)
    const subtotal = cartProducts.reduce(( total, { product, quantity }) => (product.price * quantity) + total ,0)
    const iva = (subtotal * 0.16 ).toFixed(2)
    const total = subtotal + Number(iva)


    const handleChekout = async() => {
        setIsCheckoutLoading(true)
        await dispatch(postPurchases())
        setIsCheckoutLoading(false)
        navigate('/purchases')
    }
    

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
            <PrimaryButton
                type="button"
                onClick={ handleChekout }
                disabled={ isCheckoutLoading }
            >
                { isCheckoutLoading ? <><Loader /> Checking</> : 'Checkout'}
            </PrimaryButton>
        </section>
    )
}

Summary.propTypes = {
    cartProducts: PropTypes.array
}