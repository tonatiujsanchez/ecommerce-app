import { useEffect } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { checkingAuth } from './store/thunks'
import { HomePage, LoginPage, PrivateRoutes, RegisterPage } from './pages'
import { Header } from './components'
import './App.css'

function App() {

    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(checkingAuth())        
    }, [])
    

    return (
        <>
            <Header />
            <Routes>
                <Route path='/' element={ <HomePage /> } />
                <Route path='/product/:id' element={ <h1>Product ID Page</h1> } />
                <Route path='/register' element={ <RegisterPage /> } />
                <Route path='/login' element={ <LoginPage /> } />
                <Route element={ <PrivateRoutes /> } >
                    <Route path='/cart' element={ <h1>Cart Page</h1> } />
                    <Route path='/purchases' element={ <h1>Purchases Page</h1> } />
                </Route>
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </>
    )
}

export default App
