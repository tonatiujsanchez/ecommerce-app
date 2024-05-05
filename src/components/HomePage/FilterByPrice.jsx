import { useDispatch } from 'react-redux'
import { ArrowRightIcon } from '../Icons'
import './styles/filterByPrice.css'
import { setSelectedPrice } from '../../store/slices'
import { PRICING_OPTIONS } from '../../constants'

export const FilterByPrice = () => {

    const dispatch = useDispatch()

    const handleFilterByPrice = (price) => {
        dispatch( setSelectedPrice(price) )
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
                    <form className="filter-price__form">
                        <input 
                            type="number" 
                            placeholder="Min"
                            min={0}
                        />
                        <input 
                            type="number" 
                            placeholder="Max"
                            min={0}
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
