import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategories } from '../../store/thunks'
import { setSelectedCategory } from '../../store/slices'
import { MsgError } from '../Shared/MsgError'
import './styles/filterByCategory.css'

export const FilterByCategory = () => {

    const dispatch = useDispatch()
    const { categories, isLoadingCategories, hasErrorCategories  } = useSelector(state => state.categories)
    
    useEffect(()=>{
        dispatch(getCategories())
    },[])

    const handleSelectedCategory = (category) => {
        dispatch( setSelectedCategory(category) )
    }

    return (
        <div className="filter-category">
            <h3 className="filter__title">Categories</h3>
            { isLoadingCategories && ( 
                <p>loading categories...</p> 
            )}
            { hasErrorCategories && ( 
                <div className="filter-category__error">
                    <MsgError msg={ hasErrorCategories } />
                </div> 
            )}
            {
                !isLoadingCategories && !hasErrorCategories && (
                    <ul className="filter-category__list">
                        {
                            categories.map(category => (
                                <li key={ category.id }>
                                    <button 
                                        className="filter-category__button"
                                        onClick={ ()=> handleSelectedCategory(category) }
                                    >
                                        { category.name }
                                    </button>
                                </li>
                            ))
                        }
                    </ul>
                )
            }
        </div>
    )
}
