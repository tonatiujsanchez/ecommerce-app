import PropTypes from 'prop-types'
import { ProductSlideshow, HeartIcon } from '../../components'
import { currencyFormatMXN } from '../../utilities'
import './styles/productDetails.css'

export const ProductDetails = ({ product }) => {
    return (
        <article className="product">
            <div className="product__slide">
                <ProductSlideshow
                    images={ product.images }
                />
            </div>
            <div className="product__info">
                <p className="product__brand">{ product.brand }</p>
                <h1 className="product__title">{ product.title }</h1>
                <h1 className="product__title">{ currencyFormatMXN(product.price) }</h1>
                <p className="product__description">{ product.description }</p>
                <div>
                    <div>
                        Counter
                    </div>
                    <button className="product__button">Add to cart</button>
                </div>
                <button>
                    <HeartIcon /> Add to Wishlist
                </button>
            </div>
        </article>
    )
}

ProductDetails.propTypes = {
    product: PropTypes.object.isRequired
}