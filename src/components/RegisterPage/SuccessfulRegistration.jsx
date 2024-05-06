import { Link } from 'react-router-dom'
import './styles/successfulRegistration.css'
import { ArrowRightUpIcon, CheckCircleIcon } from '../Icons'


export const SuccessfulRegistration = () => {
    return (
        <div className="successful-registration ">
            <CheckCircleIcon />
            <p className="successful-registration__description">Your registration was completed successfully</p>
            <Link className="successful-registration__link" to="/login">Login now <ArrowRightUpIcon/></Link>
        </div>
    )
}
