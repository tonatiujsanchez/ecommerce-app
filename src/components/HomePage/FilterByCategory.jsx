import './styles/filterByCategory.css'

export const FilterByCategory = () => {
    return (
        <div className="filter-category">
            <h3 className="filter__title">Categories</h3>
            <ul className="filter-category__list">
                <li><button className="filter-category__button">Kitchen</button></li>
                <li><button className="filter-category__button">Smart TV</button></li>
                <li><button className="filter-category__button">Smartphones</button></li>
                <li><button className="filter-category__button">Computers</button></li>
            </ul>
        </div>
    )
}
