import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { MainLoader } from '../components'
import { AUTH_STATUS } from '../constants'
import './styles/routes.css'


export const AuthRoutes = () => {

    const { status } = useSelector(state => state.auth)

    if( status === AUTH_STATUS.checking ) {
        return (
            <div className="main-loader__content">
                <MainLoader />
            </div>
        )
    }

    return (
        status === AUTH_STATUS.notAuthenticated 
        ? <Outlet /> 
        : <Navigate to="/user" />
    )
}
