import { useDispatch, useSelector } from 'react-redux'
import { setSelectedCategory, setSelectedPrice } from '../../store/slices'
import { XIcon } from '../Icons'
import './styles/filterList.css'

export const FilterList = () => {

    const dispatch = useDispatch()
    const { selectedCategory, selectedPrice } = useSelector(state => state.filters)

    if( !selectedCategory && !selectedPrice ){
        return <></>
    }

    return (
        <ul className="filter-list">
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
