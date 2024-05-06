import { useDispatch, useSelector } from 'react-redux'
import { LogoutIcon } from '../components'
import { startLogout } from '../store/thunks'
import './styles/userPage.css'

export const UserPage = () => {

    const dispatch = useDispatch()
    const { user } = useSelector(state => state.auth)

    const handleLogout = () => {
        dispatch( startLogout() )
    }

    return (
        <main className="user container">
            <article className="user__content">
                <div>
                    <div className="user__letter">
                        <span>{ user.firstName.slice(0,1) }</span>
                    </div>
                </div>
                <div className="user__info">
                    <div className="user__header">
                        <h1 className="user__name">{ user.firstName } { user.lastName }</h1>
                        <p className="user__username">@{ user.firstName }</p>
                    </div>
                    <ul className="user__list">
                        <li className="user__item">
                            <span>Email:</span>
                            <p>{ user.email }</p>
                        </li>
                        <li className="user__item">
                            <span>Phone:</span>
                            <p>{ user.phone ? user.phone : '----------' }</p>
                        </li>
                    </ul>
                    <button
                        type="button"
                        onClick={ handleLogout }
                        className="user__button-logout"
                    >
                        <LogoutIcon /> Logout
                    </button>
                </div>
            </article>
        </main>
    )
}
