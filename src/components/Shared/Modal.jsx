import PropTypes from 'prop-types'
import { XIcon } from '../Icons'
import './styles/modal.css'

export const Modal = ({ children, title, onCloseModal, titleSize= '3rem' }) => {
    return (
        <div className="modal">
            <div onClick={ onCloseModal } className="modal__overlay"></div>
            <div className="modal__content">
                <div className="modal__header">
                    <h2 className="modal__title" style={{ fontSize: titleSize }}>{ title }</h2>
                    <button 
                        type="button"
                        className="modal__close-button"
                        onClick={ onCloseModal }
                    >
                        <XIcon />
                    </button>
                </div>
                { children }
            </div>
        </div>
    )
}

Modal.propTypes = {
    children: PropTypes.node,
    title: PropTypes.string,
    onCloseModal: PropTypes.func,
    titleSize: PropTypes.string,
}