import PropTypes from 'prop-types'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductsByCategory } from '../../store/thunks'
import { ProductCard } from '../HomePage/ProductCard'
import './styles/similarProducts.css'

export const SimilarProducts = ({ categoryId, productId }) => {
    
    const dispatch = useDispatch()
    const { similarProducts } = useSelector(store => store.products)

    useEffect(()=>{
        if( categoryId ){
            dispatch( getProductsByCategory( categoryId ) )
        }
    },[categoryId])
    
    return (
        <div className="similar-products">
            <h2 className="similar-products__title">You might also be interested</h2>
            <div className="similar-products__list">
                {
                    similarProducts.filter( product => product.id !== productId ).map( product => (
                        <ProductCard
                            key={ product.id }
                            product={ product }
                        />
                    ))
                }
            </div>
        </div>
    )
}

SimilarProducts.propTypes = {
    categoryId: PropTypes.number,
    productId: PropTypes.number,
}