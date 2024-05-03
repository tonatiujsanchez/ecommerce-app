import PropTypes from 'prop-types'
import { ProductCard } from './ProductCard'
import './styles/productList.css'

export const ProductList = ({ products }) => {
    
    return (
        <section className="product-list">
            {
                products.map( product => (
                    <ProductCard key={ product.id } product={ product } />
                ))
            }
        </section>
    )
}

ProductList.propTypes = {
    products: PropTypes.array
}