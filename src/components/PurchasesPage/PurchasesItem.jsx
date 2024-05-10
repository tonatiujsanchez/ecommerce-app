import PropTypes from 'prop-types'
import { currencyFormatMXN, dateFormatLong } from '../../utilities'
import './styles/purchasesItem.css'

export const PurchasesItem = ({ purchase }) => {
    const { product } = purchase

    const subtotal = product.price * purchase.quantity

    
    return (
        <li className="purchase">
            <figure className="purchase__figure">
                <img src={ product.images[0].url } alt={ product.title } />
            </figure>
            <h3 className="purchase__title">{ product.title }</h3>
            <p>{ dateFormatLong(purchase.createdAt) }</p>
            <p className="purchase__quantity">{ purchase.quantity }</p>
            <p className="purchase__subtotal">{ currencyFormatMXN(subtotal) }</p>
        </li>
    )
}

PurchasesItem.propTypes = {
    purchase: PropTypes.object.isRequired
}