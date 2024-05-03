import { Navigate, Route, Routes } from 'react-router-dom'
import { HomePage } from './pages'
import './App.css'
import { Header } from './components'

function App() {

    return (
        <>
            <Header />
            <Routes>
                <Route path='/' element={ <HomePage /> } />
                <Route path='/product/:id' element={ <h1>Product ID Page</h1> } />
                <Route path='/register' element={ <h1>Register Page</h1> } />
                <Route path='/login' element={ <h1>Login Page</h1> } />
                <Route path='/cart' element={ <h1>Cart Page</h1> } />
                <Route path='/purchases' element={ <h1>Purchases Page</h1> } />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </>
    )
}

export default App
