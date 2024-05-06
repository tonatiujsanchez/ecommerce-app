import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { startLogin } from '../store/thunks'
import { PrimaryButton } from '../components'
import './styles/loginPage.css'

export const LoginPage = () => {

    const { register, handleSubmit } = useForm()
    const dispatch = useDispatch()
    const [ isLoading, setIsLoading ] = useState(false)
    const { hasAuthError } = useSelector(state => state.auth)


    const handleLoginSubmit = async(data) => {
        setIsLoading(true)
        await dispatch( startLogin({ email: data.email, password: data.password }) )
        setIsLoading(false)
        if( hasAuthError ) {
            console.log(hasAuthError)
        }
        
    }

    return (
        <div className="auth">
            <div className="auth__content">
                <div className="auth__header">
                    <h1 className="auth__title">Welcome!</h1>
                    <p className="auth__description">Enter your email and password to continue</p>
                </div>
                <form
                    onSubmit={ handleSubmit(handleLoginSubmit) } 
                    className="auth__form"
                >
                    <div className="auth__field">
                        <label className="auth__label" htmlFor="email">Email</label>
                        <input 
                            type="text" 
                            id="email"
                            className="auth__input"
                            { ...register('email', {
                                required: true,
                                validate: value => value.trim() === '' ? 'Email is required' : undefined
                            })} 
                        />
                    </div>
                    <div className="auth__field">
                        <label className="auth__label" htmlFor="password">Password</label>
                        <input 
                            type="password" 
                            id="password"
                            className="auth__input" 
                            { ...register('password', {
                                required: true,
                                validate: value => value.trim() === '' ? 'Password is required' : undefined
                            })} 
                        />
                    </div>
                    <PrimaryButton
                        type="submit"
                    >
                        {
                            isLoading
                            ? 'Autenticando...'
                            : 'Login'
                        }
                    </PrimaryButton>
                </form>
                <div className="auth__footer">
                    <p className="auth__footer-text">
                        If you do not have an account, <Link className="auth__footer-link" to="/register">Sign up</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}
