import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { AUTH_STATUS } from '../constants'



export const PrivateRoutes = () => {

    const { status } = useSelector(state => state.auth)

    if( status === AUTH_STATUS.checking ) {
        return (
            <div>
                <p>Cargando...</p>
            </div>
        )
    }

    return (
        status === AUTH_STATUS.authenticated ? <Outlet /> : <Navigate to="/" />
    )
}
