import { useEffect } from 'react'
import { ProductCard } from './ProductCard'
import { useGetProducts } from '../../hooks/useGetProducts'
import './styles/productList.css'

export const ProductList = () => {

    const { products, getProducts, isLoadingProducts, hasErrorProducts } = useGetProducts()

    useEffect(() => {
        if( products.length === 0 ){
            getProducts()
        }
    }, [])

    if( isLoadingProducts ){
        return (
            <p>Loading products...</p>
        )
    }

    if( hasErrorProducts ){
        return (
            <p>{ hasErrorProducts }</p>
        )
    }
    
    return (
        <section className="product-list">
            {
                products.map( product => (
                    <ProductCard key={ product.id } product={ product } />
                ))
            }
        </section>
    )
}