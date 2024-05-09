import { useDispatch, useSelector } from 'react-redux'
import { FilterSide, ProductList, SlideShow } from '../components'
import './styles/homePage.css'
import { setShowFilterSidebar } from '../store/slices'

export const HomePage = () => {

    const { showFilterSidebar } = useSelector( store => store.ui )
    const dispatch = useDispatch()

    const handleCloseFilter = () => {
        dispatch( setShowFilterSidebar(false) )
    }


    return (
        <main className="container main">
            <SlideShow />
            <div className="main__content">
                <FilterSide />
                { showFilterSidebar && (
                    <div 
                        className="main__overlay"
                        onClick={handleCloseFilter}
                    ></div>
                )}
                <ProductList />
            </div>
        </main>
    )
}
