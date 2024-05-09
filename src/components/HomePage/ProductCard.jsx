import { useState } from 'react'
import PropTypes from 'prop-types'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addProductToCart, removeProductToCart } from '../../store/thunks'
import { AUTH_STATUS } from '../../constants'
import { HeartIcon, ShoppingCartIcon } from '../Icons'
import { currencyFormatMXN } from '../../utilities'
import './styles/productCard.css'

export const ProductCard = ({ product }) => {

    const [isLoadingCart, setIsLoadingCart] = useState(false)

    const { cartProducts } = useSelector( state => state.cart )
    const { status } = useSelector( state => state.auth )
    const dispatch = useDispatch()

    const navigate = useNavigate()
    const isProductAdded = () => {
        return cartProducts.find( cartProduct => cartProduct.productId === product.id )
    }

    const handleProductCart = async() => {

        if( status !== AUTH_STATUS.authenticated ){
            return navigate('/login')
        }
        
        setIsLoadingCart(true)
        if( isProductAdded() ){
            await dispatch( removeProductToCart( isProductAdded().id ) )
        }else {
            await dispatch( addProductToCart( product ) )
        }
        setIsLoadingCart(false)
    }

    return (
        <article className="product-card">
            <Link 
                to={`/product/${ product.id }`}
            >
                <figure
                    className="product-card__figure"
                >
                    <img 
                        src={ product.images[0].url} 
                        alt={ product.title }
                        title={ product.title }
                        className="product-card__img product-card__img-one"
                    />
                    <img 
                        src={ product.images[1].url} 
                        alt={ product.title }
                        title={ product.title }
                        className="product-card__img product-card__img-two"
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
                <button 
                    className="product-card__btn-add"
                    onClick={ handleProductCart }
                    disabled={ isLoadingCart }
                >
                    {
                        isProductAdded()
                            ? isLoadingCart ? <span> Removing...</span> : <> <ShoppingCartIcon /> Remove to Cart </>
                            : isLoadingCart ? <span> Adding...</span> : <> <ShoppingCartIcon /> Add to Cart </>
                    }
                </button>
            </div>
        </article>
    )
}

ProductCard.propTypes = {
    product: PropTypes.object
}