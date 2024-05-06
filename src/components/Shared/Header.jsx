import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { BoxIcon, HeartIcon, ShoppingCartIcon, UserCircleIcon } from '../Icons'
import './styles/header.css'
import { AUTH_STATUS } from '../../constants'

export const Header = () => {

    const { user, status } = useSelector(state => state.auth)
    
    return (
        <header className="header">
            <div className="header__container container">
                <Link to="/" className="header__logo">e-commerce</Link>
                <nav className="nav">
                    {
                        status !== AUTH_STATUS.checking && (
                            <ul className="nav__list">
                                <li className="nav__item">
                                    <Link to="/cart" className="nav__link"><ShoppingCartIcon /></Link>
                                </li>
                                <li className="nav__item">
                                    <Link to="/favorites" className="nav__link"><HeartIcon /></Link>
                                </li>
                                <li className="nav__item">
                                    <Link to="/purchases" className="nav__link"><BoxIcon /></Link>
                                </li>
                                <li className="nav__item">
                                    {
                                        user 
                                        ?(
                                            <Link to="/user" className="nav__link nav__link--user">
                                                <span>{ user.firstName.slice(0,1) }</span>
                                            </Link>
                                        ):(
                                            <Link to="/login" className="nav__link"><UserCircleIcon /></Link>
                                        )
                                    }
                                </li>
                            </ul>
                        )
                    }
                </nav>
            </div>
        </header>
    )
}
