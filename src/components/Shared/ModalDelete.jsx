import PropTypes from 'prop-types'
import { Loader } from './Loader'
import './styles/modalDelete.css'

export const ModalDelete = ({ product, handleRemoveProductToCart, isLoading }) => {
    return (
        <div className="delete-confirm">
            <p>¿Desea remover <strong>{ product.title }</strong> del carrito?</p>
            <div className="delete-confirm__actions">
                <button 
                    type="button" 
                    disabled={ isLoading }
                    onClick={()=> handleRemoveProductToCart(false)}
                    className="delete-confirm__actions-button"
                >
                    Cancelar
                </button>
                <button 
                    type="button" 
                    disabled={ isLoading }
                    onClick={()=> handleRemoveProductToCart(true)}
                    className="delete-confirm__actions-button delete-confirm__actions--delete"
                >
                    { 
                        isLoading 
                            ? <Loader borderColor='#DC2626' width='2rem' /> 
                            : 'Remover' 
                    }
                </button>
            </div>
        </div>
    )
}


ModalDelete.propTypes = {
    product: PropTypes.object,
    handleRemoveProductToCart: PropTypes.func,
    isLoading: PropTypes.bool
}