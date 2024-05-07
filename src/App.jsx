import { useEffect } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { checkingAuth, getCart } from './store/thunks'
import { AuthRoutes, CartPage, HomePage, LoginPage, PrivateRoutes, RegisterPage, UserPage } from './pages'
import { Header } from './components'
import './App.css'

function App() {

    const dispatch = useDispatch()

    const checkAuth = async() => {
        await dispatch(checkingAuth())
        await dispatch(getCart()) 
    }

    useEffect(() => {
        checkAuth()
    }, [])
    

    return (
        <>
            <Header />
            <Routes>
                <Route path='/' element={ <HomePage /> } />
                <Route path='/product/:id' element={ <h1>Product ID Page</h1> } />
                <Route element={ <AuthRoutes /> }>
                    <Route path='/register' element={ <RegisterPage /> } />
                    <Route path='/login' element={ <LoginPage /> } />
                </Route>

                <Route element={ <PrivateRoutes /> } >
                    <Route path='/cart' element={ <CartPage /> } />
                    <Route path='/purchases' element={ <h1>Purchases Page</h1> } />
                    <Route path='/user' element={ <UserPage /> } />
                </Route>
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </>
    )
}

export default App
