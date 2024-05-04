import { ArrowRightIcon } from '../Icons'
import './styles/filterByPrice.css'

export const FilterByPrice = () => {
    return (
        <div className="filter-price">
            <h3 className="filter__title">Price</h3>
            <ul className="filter-price__list">
                <li className="filter-price__item"><button>Up to $500</button></li>
                <li className="filter-price__item"><button>$500 to $1000</button></li>
                <li className="filter-price__item"><button>More than 1000</button></li>
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
