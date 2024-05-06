import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import { createUser } from '../store/thunks'
import { setRegistrationCompleted } from '../store/slices'
import { PrimaryButton, SuccessfulRegistration } from '../components'
import { isEmail } from '../utilities'
import './styles/loginPage.css'


export const RegisterPage = () => {

    const [isLoading, setIsLoading] = useState(false)
    const { register, handleSubmit, formState: { errors } } = useForm()
    
    const dispatch = useDispatch()
    const { hasAuthError, registrationCompleted } = useSelector(state => state.auth)

    useEffect(() => {    
      return () => {
        dispatch(setRegistrationCompleted(false))
      }
    }, [])
    

    const handleUserSubmit = async (data) => {

        setIsLoading(true)
        await dispatch(createUser({ user: data }))
        setIsLoading(false)

        if (hasAuthError) {
            console.log(hasAuthError)
        }
    }

    if(registrationCompleted){
        return (
            <div className="auth">
                <SuccessfulRegistration />
            </div>
        )
    }

    return (
        <main className="auth">
            <div className="auth__content">
                <div className="auth__header">
                    <h1 className="auth__title">Sign up</h1>
                </div>
                <form 
                    onSubmit={handleSubmit(handleUserSubmit)}
                    className="auth__form"
                >
                    <div className="auth__field">
                        <label htmlFor="firstName" className="auth__label">First name<span className="auth__label--required">*</span></label>
                        <input
                            type="text"
                            id="firstName"
                            className="auth__input"
                            {...register('firstName', {
                                validate: ( value ) => value.trim() === '' ? 'First name is required' : undefined,
                                maxLength: { value: 25, message: 'The First name is very long, max 25 characters' }
                            })}
                        />
                        { errors.firstName && (
                            <span className="auth__message-error">{ errors.firstName.message }</span>
                        )}
                    </div>
                    <div className="auth__field">
                        <label htmlFor="lastName" className="auth__label">Last name<span className="auth__label--required">*</span></label>
                        <input
                            type="text"
                            id="lastName"
                            className="auth__input"
                            {...register('lastName', {
                                validate: ( value ) => value.trim() === '' ? 'Last name is required' : undefined,
                                maxLength: { value: 25, message: 'The last name is very long, max 25 characters' }
                            })}
                        />
                        { errors.lastName && (
                            <span className="auth__message-error">{ errors.lastName.message }</span>
                        )}
                    </div>
                    <div className="auth__field">
                        <label htmlFor="email" className="auth__label">Email<span className="auth__label--required">*</span></label>
                        <input
                            type="text"
                            id="email"
                            className="auth__input"
                            {...register('email', {
                                required: 'Email is required',
                                validate: ( value ) => isEmail( value ),
                            })}
                        />
                        { errors.email && (
                            <span className="auth__message-error">{ errors.email.message }</span>
                        )}
                    </div>
                    <div className="auth__field">
                        <label htmlFor="password" className="auth__label">Password<span className="auth__label--required">*</span></label>
                        <input
                            type="password"
                            id="password"
                            className="auth__input"
                            {...register('password', {
                                validate: ( value ) => value.trim() === '' ? 'Password is required': undefined,
                                minLength: { value: 6, message: 'The password is very short, min 6 characters' }
                            })}
                        />
                        { errors.password && (
                            <span className="auth__message-error">{ errors.password.message }</span>
                        )}
                    </div>
                    <div className="auth__field">
                        <label htmlFor="phone" className="auth__label">Phone</label>
                        <input
                            type="number"
                            id="phone"
                            className="auth__input"
                            {...register('phone', {
                                minLength: { value: 10, message: 'Phone number is not valid, min 10 characters' },
                                maxLength: { value: 10, message: 'Phone number is not valid, max 10 characters' },
                            })}
                        />
                        { errors.phone && (
                            <span className="auth__message-error">{ errors.phone.message }</span>
                        )}
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
        </main>
    )
}
