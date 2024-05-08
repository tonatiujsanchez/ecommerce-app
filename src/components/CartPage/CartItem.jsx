import { useState } from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { removeProductToCart, updateQuantityToCartProduct } from '../../store/thunks'
import { ModalDelete } from '../Shared/ModalDelete'
import { Modal } from '../Shared/Modal'
import { TrashIcon } from '../Icons'
import { currencyFormatMXN } from '../../utilities'
import './styles/cartItem.css'

export const CartItem = ({ cartProduct }) => {

    const [isLoadingRemove, setIsLoadingRemove] = useState(false)
    const [isShowModalDelete, setIsShowModalDelete] = useState(false)
    const [isLoadingUpdate, setIsLoadingUpdate] = useState(false)
    const dispatch = useDispatch()
    const { product, quantity } = cartProduct
    

    const handleChangeQuantityMinus = async() => {
        if( quantity === 1 ){ return }

        const newQuantity = quantity - 1
        setIsLoadingUpdate(true)
        await dispatch( updateQuantityToCartProduct( cartProduct.id, newQuantity ) )
        setIsLoadingUpdate(false)
    } 

    const handleChangeQuantityPlus = async() => {
        const newQuantity = quantity + 1
        setIsLoadingUpdate(true)        
        await dispatch( updateQuantityToCartProduct( cartProduct.id, newQuantity ) )
        setIsLoadingUpdate(false)
    }


    const handleRemoveProductToCart = async( result ) => {

        if(result){
            setIsLoadingRemove(true)
            await dispatch( removeProductToCart(cartProduct.id) )
            setIsLoadingRemove(false)
        }

        setIsShowModalDelete(false)

    }

    return (
        <li className={`cart-item ${ (isLoadingRemove || isLoadingUpdate) && 'cart-item--prosessing' }`}>
            <figure className="cart-item__figure">
                <img src={ product.images[0].url } alt={ product.title } />
            </figure>
            <div className="cart-item__info">
                <div className="cart-item__title-container">
                    <h3 className="cart-item__title">{ product.title }</h3>
                    <button 
                        className="cart-item__button-remove"
                        onClick={ ()=> setIsShowModalDelete(true) }
                        disabled={ isLoadingUpdate ||  isLoadingRemove }
                    >
                        { isLoadingRemove ? '...' : <TrashIcon /> }
                    </button>
                </div>
                <p className="cart-item__price">{ currencyFormatMXN(product.price) }</p>
                <div className="cart-item__form">
                    <button
                        type="button"
                        disabled={ isLoadingUpdate ||  isLoadingRemove }
                        onClick={ handleChangeQuantityMinus }
                        className="cart-item__form-button"
                    >
                        -
                    </button>
                    <input 
                        type="number" 
                        value={ quantity || 1}
                        onChange={ () => {console.log('onChange...')} }
                        disabled={ isLoadingUpdate ||  isLoadingRemove }
                        className="cart-item__form-input"
                    />
                    <button
                        type="button"
                        disabled={ isLoadingUpdate ||  isLoadingRemove }
                        onClick={ handleChangeQuantityPlus }
                        className="cart-item__form-button"
                    >
                        +
                    </button>
                </div>
            </div>
            {
                isShowModalDelete && (
                    <Modal
                        title="Remover producto del carrito"
                        onCloseModal={ () => setIsShowModalDelete(false) }
                        titleSize="2.2rem"
                    >
                        <ModalDelete
                            product={ product }
                            handleRemoveProductToCart={ handleRemoveProductToCart }
                            isLoading={ isLoadingRemove }
                        />
                    </Modal>
                )
            }
        </li>
    )
}

CartItem.propTypes = {
    cartProduct: PropTypes.object
}