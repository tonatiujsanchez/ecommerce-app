import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { HeartIcon, ShoppingCartIcon } from '../Icons'
import { currencyFormatMXN } from '../../utilities'
import './styles/productCard.css'

export const ProductCard = ({ product }) => {
    return (
        <article className="product-card">
            <Link to={`/product/${ product.id }`}>
                <figure className="product-card__figure">
                    <img 
                        src={ product.images[0].url } 
                        alt={ product.title }
                        title={ product.title }
                        className="product-card__img"
                    />
                </figure>
            </Link>
            <div className="product-card__info">
                <span className="product-card__brand">{ product.brand }</span>
                <Link to={`/product/${ product.id }`}>
                    <h4 className="product-card__title">{ product.title }</h4>
                </Link>
                <p className="product-card__price">{ currencyFormatMXN(product.price) }</p>
            </div>
            <button className="product-card__btn-favorite"><HeartIcon /></button>
            <div className="product-card__btn-add-content">
                <button className="product-card__btn-add"><ShoppingCartIcon /> Add to Cart</button>
            </div>
        </article>
    )
}

ProductCard.propTypes = {
    product: PropTypes.object
}