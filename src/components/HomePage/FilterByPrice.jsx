import { useDispatch } from 'react-redux'
import { ArrowRightIcon } from '../Icons'
import './styles/filterByPrice.css'
import { setSelectedPrice } from '../../store/slices'
import { PRICING_OPTIONS } from '../../constants'
import { useForm } from 'react-hook-form'

export const FilterByPrice = () => {

    const { register, handleSubmit, reset } = useForm()
    const dispatch = useDispatch()

    const handleFilterByPrice = (price) => {
        dispatch( setSelectedPrice(price) )
    }

    const handlePriceSubmit = (data) => {
        const price = {
            label: `$${data.min} to $${data.max}`,
            value: {
                min: data.min,
                max: data.max,
            }
        } 
        dispatch( setSelectedPrice(price) )
        reset()
    }

    return (
        <div className="filter-price">
            <h3 className="filter__title">Price</h3>
            <ul className="filter-price__list">
                {
                    PRICING_OPTIONS.map(price => (
                        <li key={ price.label } className="filter-price__item">
                            <button type="button" onClick={ () => handleFilterByPrice(price) }>{ price.label }</button>
                        </li>
                    ))
                }
                <li className="filter-price__item filter-price__item--form">
                    <form
                        onSubmit={handleSubmit(handlePriceSubmit)} 
                        className="filter-price__form"
                    >
                        <input 
                            type="number" 
                            placeholder="Min"
                            min={0}
                            { ...register('min', {
                                required: true,
                                min: 0
                            })}
                        />
                        <input 
                            type="number" 
                            placeholder="Max"
                            min={0}
                            { ...register('max',{
                                required: true,
                                min: 0
                            })}
                        />
                        <button 
                            type="submit" 
                            className="filter-price__submit"
                        >
                            <ArrowRightIcon />
                        </button>
                    </form>
                </li>
            </ul>
        </div>
    )
}
