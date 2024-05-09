import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../store/thunks'
import { useEffect, useState } from 'react'

export const useGetProducts = () => {
    
    const dispatch = useDispatch()
    const { products:allProducts, isLoadingProducts, hasErrorProducts } = useSelector(state => state.products)
    const { selectedCategory, selectedPrice, searchTerm } = useSelector(state => state.filters)

    const [products, setProducts] = useState( allProducts )

    useEffect(() => {
        let currentProducts = allProducts

        // Filtrar por SearchTerm
        if( searchTerm ){
            currentProducts= currentProducts.filter( product => (
                product.title.trim().toLowerCase().includes(searchTerm.trim().toLowerCase())
            ))
        }

        // filtrar por categoría
        if( selectedCategory ){
            currentProducts = currentProducts.filter( product => product.categoryId === selectedCategory.id )
        }

        // filtrar por precio
        if( selectedPrice ){
            currentProducts = currentProducts.filter( product => 
                Number(product.price) >= selectedPrice.value.min && Number(product.price) <= selectedPrice.value.max 
            )
        }

        setProducts( currentProducts )
        
    }, [allProducts, selectedCategory, selectedPrice, searchTerm])


    const getAllProdcuts = () => {
        dispatch( getProducts() )
    }
    
    return {
        products,
        getProducts: getAllProdcuts,
        isLoadingProducts,
        hasErrorProducts,
    }
}
