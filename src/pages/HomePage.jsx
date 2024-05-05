import { FilterSide, ProductList, SlideShow } from '../components'
import './styles/homePage.css'

export const HomePage = () => {

    return (
        <main className="container main">
            <SlideShow />
            <div className="main__content">
                <FilterSide />
                <ProductList />
            </div>
        </main>
    )
}
