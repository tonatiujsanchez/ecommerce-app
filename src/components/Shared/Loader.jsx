import PropTypes from 'prop-types'
import './styles/loader.css'

export const Loader = ({ borderColor='#FFF', width='2rem' }) => {
    return (
        <span 
            className="loader"
            style={{ 
                borderBottomColor: borderColor,
                width,
                height: width              
            }}
        >

        </span>
    )
}

Loader.propTypes = {
    borderColor: PropTypes.string,
    width: PropTypes.string,
}