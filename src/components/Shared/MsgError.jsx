import PropTypes from 'prop-types'
import { ErrorWarningCircleIcon } from '../Icons'
import './styles/msgError.css'

export const MsgError = ({ msg }) => {
    return (
        <div className="msg-error">
            <ErrorWarningCircleIcon />
            <p>{ msg }</p>
        </div>
    )
}

MsgError.propTypes = {
    msg: PropTypes.string
}