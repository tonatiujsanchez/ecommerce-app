import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../store/thunks/products.thunk'
import { FilterSide, ProductList, SlideShow } from '../components'
import './styles/homePage.css'

export const HomePage = () => {


    const dispatch = useDispatch()
    const { isLoading, products } = useSelector(state => state.products)

    useEffect(() => {
        if( products.length === 0 ){
            dispatch( getProducts() )
        }
    }, [])

    return (
        <main className="container main">
            <SlideShow />
            
            <div className="main__content">
                {
                    isLoading
                    ?(
                        <h3>Cargando...</h3>
                    ):(
                        <>
                            <FilterSide />
                            { products && <ProductList products={ products } /> }
                        </>
                    )
                }
            </div>
        </main>
    )
}
