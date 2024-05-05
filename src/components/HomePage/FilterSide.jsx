import { FilterByCategory,FilterByPrice, FilterIcon, FilterList } from '../../components'
import './styles/filterSide.css'

export const FilterSide = () => {

    return (
        <aside className="filter-side">
            <h2 className="filter-side__heading">
                <FilterIcon/> Filters
            </h2>
            <FilterList />
            <FilterByPrice />
            <FilterByCategory />
        </aside>
    )
}
