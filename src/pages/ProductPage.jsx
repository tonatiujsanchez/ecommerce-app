import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getProductById } from '../store/thunks'
import { setProductSelected, setSimilarProducts } from '../store/slices'
import { MainLoader, ProductDetails, SimilarProducts } from '../components'

export const ProductPage = () => {
    
    const params = useParams()
    const dispatch = useDispatch()
    const { productSelected, isLoadingProducts, hasErrorProducts } = useSelector(state => state.products)

    useEffect(()=>{
        if( params.id ){
            dispatch( getProductById( params.id ) )
        }

        return ()=>{
            dispatch( setProductSelected(null) )
            dispatch(setSimilarProducts([]))
        }
    },[ params.id ])


    if( isLoadingProducts ){
        return (
            <div className="main-loader__content">
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
        <div className="container">
            {
                productSelected && (
                    <ProductDetails product={ productSelected } />
                )
            }
            <SimilarProducts
                categoryId={ productSelected?.categoryId }
                productId={ productSelected?.id }
            />
        </div>
    )
}
