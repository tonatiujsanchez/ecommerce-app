import { useDispatch, useSelector } from 'react-redux'
import { FilterByCategory,FilterByPrice, FilterByTerm, FilterIcon, FilterList, XIcon } from '../../components'
import { setShowFilterSidebar } from '../../store/slices'
import './styles/filterSide.css'

export const FilterSide = () => {

    const { showFilterSidebar } = useSelector( store => store.ui )
    const dispatch = useDispatch()

    const handleCloseFilter = () => {
        dispatch( setShowFilterSidebar(false) )
    }

    return (
        <aside className={`filter-side ${showFilterSidebar && 'filter-side__open' }`}>
            <h2 className="filter-side__heading">
                <FilterIcon/> Filters
            </h2>
            <FilterList />
            <FilterByTerm />
            <FilterByPrice />
            <FilterByCategory />
            <button
                type="button"
                onClick={ handleCloseFilter }
                className="filter-side__button-close"
            >
                <XIcon />
            </button>
        </aside>
    )
}
