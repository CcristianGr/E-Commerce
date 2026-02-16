import { useContext, useEffect } from "react"
import { useLocation } from "react-router-dom"
import { Cards } from "../../Components/Cards/Cards"
import { Layout } from "../../Components/Layout/Layout"
import { ProductDetail } from "../../Components/ProductDetail/ProductDetail"
import { ShoppingCartContext } from "../../Context/ShoppingContext"

export const Home = () => {
    
    const context = useContext(ShoppingCartContext)
    const location = useLocation()

    useEffect(() => {
        const category = location.pathname.split('/')[1]
        if (category && category !== '' && category !== 'All') {
            context?.setSearchByCategory(category.toLowerCase())
        } else {
            context?.setSearchByCategory(null)
        }
        // Limpiar búsqueda por título al cambiar de categoría
        context?.setSearchByTittle('')
    }, [location, context])
    
    const renderView = () => {
        if (context?.filteredItems?.length > 0) {
            return (
                context?.filteredItems?.map((item: any) => (
                    <Cards key={item.id} data={item} />
                ))
            )
        } else {
            return <div className="col-span-4 text-center">No products found</div>
        }
    }

    const getCategoryTitle = () => {
        const category = location.pathname.split('/')[1]
        if (!category || category === '' || category === 'All') {
            return 'All Products'
        }
        return category
    }

    return (
        <Layout>
            <div className="flex items-center justify-center relative w-80 p-4 mb-4 focus:outline-none">
                <h1 className="font-medium text-xl">{getCategoryTitle()}</h1>
            </div>
            <input 
                type="text" 
                placeholder="Search a product" 
                className="rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none"
                value={context?.searchByTittle || ''}
                onChange={(event) => context?.setSearchByTittle(event.target.value)}
            />
            <div className="grid grid-cols-4 gap-4 w-full max-w-5xl">
                {renderView()}
            </div>
            <ProductDetail/>
        </Layout>  
    )
}
