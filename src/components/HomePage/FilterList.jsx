import { useDispatch, useSelector } from 'react-redux'
import { setSearchTerm, setSelectedCategory, setSelectedPrice } from '../../store/slices'
import { XIcon } from '../Icons'
import './styles/filterList.css'

export const FilterList = () => {

    const dispatch = useDispatch()
    const { selectedCategory, selectedPrice, searchTerm } = useSelector(state => state.filters)

    if( !selectedCategory && !selectedPrice && !searchTerm ){
        return <></>
    }

    return (
        <ul className="filter-list">
            { searchTerm && (
                <li className="filter-item">
                    <span>{ searchTerm }</span>
                    <button 
                        type="button"
                        onClick={()=> dispatch( setSearchTerm(null) )}
                    >
                        <XIcon />
                    </button>
                </li>
            )}
            { selectedCategory && (
                <li className="filter-item">
                    <span>{ selectedCategory.name }</span>
                    <button 
                        type="button"
                        onClick={()=> dispatch( setSelectedCategory(null) )}
                    >
                        <XIcon />
                    </button>
                </li>
            )}
            {
                selectedPrice && (
                    <li className="filter-item">
                        <span>{ selectedPrice.label }</span>
                        <button 
                            type="button"
                            onClick={()=> dispatch( setSelectedPrice(null) )}
                        >
                            <XIcon />
                        </button>
                    </li>
                )
            }
        </ul>
    )
}
