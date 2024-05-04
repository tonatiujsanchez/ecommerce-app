import { FilterIcon } from '../Icons'
import { FilterByCategory } from './FilterByCategory'
import { FilterByPrice } from './FilterByPrice'
import './styles/filterSide.css'

export const FilterSide = () => {
    return (
        <aside className="filter-side">
            <h2 className="filter-side__heading">
                <FilterIcon/> Filters
            </h2>
            <FilterByPrice />
            <FilterByCategory />
        </aside>
    )
}
