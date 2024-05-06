import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import { createUser } from '../store/thunks'
import './styles/loginPage.css'
import { PrimaryButton } from '../components'


export const RegisterPage = () => {

    const { register, handleSubmit } = useForm()
    const dispatch = useDispatch()
    const [isLoading, setIsLoading] = useState(false)
    const { hasAuthError } = useSelector(state => state.auth)

    const handleUserSubmit = async (data) => {
        setIsLoading(true)
        await dispatch(createUser({ user: data }))
        setIsLoading(false)

        if (hasAuthError) {
            console.log(hasAuthError)
        }
    }

    return (
        <div className="auth">
            <div className="auth__content">
                <div className="auth__header">
                    <h1 className="auth__title">Sign up</h1>
                </div>
                <form 
                    onSubmit={handleSubmit(handleUserSubmit)}
                    className="auth__form"
                >
                    <div className="auth__field">
                        <label htmlFor="firstName" className="auth__label">First name</label>
                        <input
                            type="text"
                            id="firstName"
                            className="auth__input"
                            {...register('firstName')}
                        />
                    </div>
                    <div className="auth__field">
                        <label htmlFor="lastName" className="auth__label">Last name</label>
                        <input
                            type="text"
                            id="lastName"
                            className="auth__input"
                            {...register('lastName')}
                        />
                    </div>
                    <div className="auth__field">
                        <label htmlFor="email" className="auth__label">Email</label>
                        <input
                            type="text"
                            id="email"
                            className="auth__input"
                            {...register('email')}
                        />
                    </div>
                    <div className="auth__field">
                        <label htmlFor="password" className="auth__label">Passowrd</label>
                        <input
                            type="password"
                            id="password"
                            className="auth__input"
                            {...register('password')}
                        />
                    </div>
                    <div className="auth__field">
                        <label htmlFor="phone" className="auth__label">Phone</label>
                        <input
                            type="number"
                            id="phone"
                            className="auth__input"
                            {...register('phone')}
                        />
                    </div>
                    <PrimaryButton
                        type="submit"
                    >
                        {
                            isLoading
                                ? 'Registrando...'
                                : 'Register'
                        }
                    </PrimaryButton>
                </form>
                <div className="auth__footer">
                    <p className="auth__footer-text">If you already have an account, <Link className="auth__footer-link" to="/login">login</Link></p>
                </div>
            </div>
        </div>
    )
}
