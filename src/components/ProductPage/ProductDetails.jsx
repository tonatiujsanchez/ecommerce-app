import { useState } from 'react'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { ProductSlideshow, HeartIcon, PrimaryButton, ShoppingCartIcon, Loader } from '../../components'
import { currencyFormatMXN } from '../../utilities'
import './styles/productDetails.css'
import { addProductToCart } from '../../store/thunks'
import { AUTH_STATUS } from '../../constants'

export const ProductDetails = ({ product }) => {

    const [quantity, setQuantity] = useState(1)
    const [isAddingProductToCart, setIsAddingProductToCart] = useState(false)
    const dispath = useDispatch()
    const { status } = useSelector( state => state.auth )
    const navigate = useNavigate()


    const handleChangeQuantityMinus = () => {
        if( quantity === 1 ){ return }
        setQuantity( quantity - 1 )
    }

    const handleChangeQuantityPlus = () => {
        if( quantity === 10 ){ return }
        setQuantity( quantity + 1 )
    }

    const handleAddProductToCart = async() => {

        if( status !== AUTH_STATUS.authenticated ){
            return navigate('/login')
        }

        setIsAddingProductToCart( true )
        await dispath( addProductToCart( product, quantity ) )
        setIsAddingProductToCart( false )
    }

    return (
        <article className="product">
            <div className="product__slide">
                <ProductSlideshow
                    images={product.images}
                />
            </div>
            <div className="product__info">
                <p className="product__brand">{product.brand}</p>
                <h1 className="product__title">{product.title}</h1>
                <h1 className="product__price">{currencyFormatMXN(product.price)}</h1>
                <p className="product__description">{product.description}</p>
                <div className="product__add-to-cart">
                    <div className="product__quantity-form">
                        <button
                            type="button"
                            disabled={isAddingProductToCart}
                            onClick={handleChangeQuantityMinus}
                            className="product__form-button"
                        >
                            -
                        </button>
                        <input
                            type="number"
                            value={quantity}
                            onChange={({ target }) => setQuantity( target.value )}
                            disabled={isAddingProductToCart}
                            className="product__form-input"
                        />
                        <button
                            type="button"
                            disabled={isAddingProductToCart}
                            onClick={handleChangeQuantityPlus}
                            className="product__form-button"
                        >
                            +
                        </button>
                    </div>
                    <div className="product__button">
                        <PrimaryButton
                            disabled={ isAddingProductToCart }
                            onClick={ handleAddProductToCart }
                        >
                            { isAddingProductToCart ? <> <Loader /> Is Adding</> : <><ShoppingCartIcon /> Add to cart</> }
                        </PrimaryButton>
                    </div>
                </div>
                <button className="product__button-favorites">
                    <HeartIcon /> Add to Favorites
                </button>
            </div>
        </article>
    )
}

ProductDetails.propTypes = {
    product: PropTypes.object.isRequired
}