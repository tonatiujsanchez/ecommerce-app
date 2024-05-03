import { Link } from 'react-router-dom'
import { BoxIcon, HeartIcon, ShoppingCartIcon, UserCircleIcon } from '../Icons'
import './styles/header.css'

export const Header = () => {
    return (
        <header className="header">
            <div className="header__container container">
                <Link to="/" className="header__logo">e-commerce</Link>
                <nav className="nav">
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
                            <Link to="/login" className="nav__link"><UserCircleIcon /></Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
