import PropTypes from 'prop-types'
import './styles/primaryButton.css'

export const PrimaryButton = ({ children, onClick, type='button', disabled=false }) => {
    return (
        <button
            type={ type }
            onClick={ onClick }
            disabled={ disabled }
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
    disabled: PropTypes.bool
}