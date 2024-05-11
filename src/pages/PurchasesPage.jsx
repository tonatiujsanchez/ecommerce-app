import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPurchases } from '../store/thunks'
import { MainLoader, PurchasesList } from '../components'
import './styles/purchasesPage.css'


export const PurchasesPage = () => {

    const dispatch = useDispatch()
    const { purchases, isPurchasesLoading, hasPurcharsesError } = useSelector(state => state.purchases)


    useEffect(() => {
        dispatch( getPurchases() )
    }, [])

    if(isPurchasesLoading){
        return (
            <div className="main-loader__content">
                <MainLoader />
            </div>
        )
    }

    if(hasPurcharsesError){
        return (
            <p>{ hasPurcharsesError }</p>
        )
    }

    if( purchases.length === 0 ){
        return (
            <div className="purchases-empty">
                <p>No purchases to show</p>
            </div>
        )
    }
    

    return (
        <main className="purchases">
            <div className="purchases__container">
                <div className="purchases__container">
                    <h1 className="purchases__heading">Purchases</h1>
                    <div className="purchases__content">
                        <PurchasesList purchases={ purchases }  />
                    </div>
                </div>
            </div>
        </main>
    )
}
