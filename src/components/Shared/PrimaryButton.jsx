import PropTypes from 'prop-types'
import './styles/primaryButton.css'

export const PrimaryButton = ({ children, onClick, type='button' }) => {
    return (
        <button
            type={ type }
            onClick={ onClick }
            className="button-primary" 
        >
            { children }
        </button>
    )
}

PrimaryButton.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
    type: PropTypes.string,
}