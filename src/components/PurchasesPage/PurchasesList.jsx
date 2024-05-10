import PropTypes from 'prop-types'
import './styles/purchasesList.css'
import { PurchasesItem } from './PurchasesItem'

export const PurchasesList = ({ purchases }) => {
    return (
        <ul className="purchases-list">
            {
                purchases.map( purchase => (
                    <PurchasesItem key={purchase.id} purchase={ purchase } />
                ))
            }
        </ul>
    )
}

PurchasesList.propTypes = {
    purchases: PropTypes.array
}