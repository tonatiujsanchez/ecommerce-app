import { FilterByCategory,FilterByPrice, FilterByTerm, FilterIcon, FilterList } from '../../components'
import './styles/filterSide.css'

export const FilterSide = () => {

    return (
        <aside className="filter-side">
            <h2 className="filter-side__heading">
                <FilterIcon/> Filters
            </h2>
            <FilterList />
            <FilterByTerm />
            <FilterByPrice />
            <FilterByCategory />
        </aside>
    )
}
