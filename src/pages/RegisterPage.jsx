import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { createUser } from '../store/thunks/auth.thunk'
import { useState } from 'react'

export const RegisterPage = () => {

    const { register, handleSubmit } = useForm()
    const dispatch = useDispatch()
    const [isLoading, setIsLoading] = useState(false)

    const handleUserSubmit = async(data) => {
        setIsLoading(true)
        await dispatch(createUser({ user: data }))
        setIsLoading(false)
    }

    return (
        <div>
            <div>
                <form onSubmit={handleSubmit(handleUserSubmit)}>
                    <div>
                        <label htmlFor="firstName">First name</label>
                        <input 
                            type="text" 
                            id="firstName"
                            {...register('firstName')}
                        />
                    </div>
                    <div>
                        <label htmlFor="lastName">Last name</label>
                        <input 
                            type="text" 
                            id="lastName"
                            {...register('lastName')}
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input 
                            type="text" 
                            id="email"
                            {...register('email')}
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Passowrd</label>
                        <input 
                            type="password" 
                            id="password"
                            {...register('password')}
                        />
                    </div>
                    <div>
                        <label htmlFor="phone">Phone</label>
                        <input 
                            type="number" 
                            id="phone"
                            {...register('phone')}
                        />
                    </div>
                    <button type="submit">{ isLoading ? 'Cargando...' : 'Register'}</button>
                </form>
                <p>If you already have an account, <Link to="/login">login</Link></p>
            </div>
        </div>
    )
}
