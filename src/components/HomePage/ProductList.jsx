import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setShowFilterSidebar } from '../../store/slices'
import { ProductCard, MainLoader, FilterIcon, FilterList } from '../../components'
import { useGetProducts } from '../../hooks/useGetProducts'
import './styles/productList.css'

export const ProductList = () => {

    const { products, getProducts, isLoadingProducts, hasErrorProducts } = useGetProducts()
    const dispatch = useDispatch()

    useEffect(() => {
        if( products.length === 0 ){
            getProducts()
        }
    }, [])

    const handleShowFilters = () => {
        dispatch(setShowFilterSidebar(true))
    }

    if( isLoadingProducts ){
        return (
            <div className="product-list-loader__content">
                <MainLoader />
            </div>
        )
    }

    if( hasErrorProducts ){
        return (
            <p>{ hasErrorProducts }</p>
        )
    }
    
    return (
        <section className="product-list__section">
            <div className="product-list__filters">
                <button
                    className="product-list__filter-button"
                    onClick={ handleShowFilters }
                >
                    <FilterIcon /> Filters
                </button>
                <FilterList />
            </div>
            {
                products.length === 0 
                ?(
                    <div className="product-list__without-results">
                        <p>Sin resultados</p>
                    </div>
                ):(
                    <div className="product-list">
                        {
                            products.map( product => (
                                <ProductCard key={ product.id } product={ product } />
                            ))
                        }
                    </div>
                )
            }
        </section>
    )
}