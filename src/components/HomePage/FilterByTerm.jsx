import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { SearchIcon } from '../Icons'
import './styles/filterByTerm.css'
import { setSearchTerm } from '../../store/slices'

export const FilterByTerm = () => {

    const { register, handleSubmit, reset } = useForm()
    const diapatch = useDispatch()

    const handleSearchSubmit = ({ searchTerm }) => {
        diapatch( setSearchTerm(searchTerm) )
        reset()
    }

    return (
        <div className="search-product">
            <h3 className="search-product__title">Search</h3>
            <form 
                onSubmit={ handleSubmit( handleSearchSubmit ) }
                className="search-product__form"
            >
                <input
                    type="text"
                    placeholder="Search by name"
                    className="search-product__input"
                    {...register('searchTerm', {
                        required: true,
                        validate: ( value ) => value.trim()==='' ? 'Search term is required' : undefined
                    })}
                />
                <button
                    type="submit"
                    className="search-product__submit"
                >
                    <SearchIcon />
                </button>
            </form>
        </div>
    )
}
