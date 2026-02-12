import { useContext } from "react"
import { Cards } from "../../Components/Cards/Cards"
import { Layout } from "../../Components/Layout/Layout"
import { ProductDetail } from "../../Components/ProductDetail/ProductDetail"
import { ShoppingCartContext } from "../../Context/ShoppingContext"

export const Home = () => {
    
    const context = useContext(ShoppingCartContext)
    
    return (
        <Layout>
            <div className="flex items-center justify-center relative w-80 p-4 mb-4 focus:outline-none">
                <h1>Exclusive products</h1>
            </div>
            <input 
                type="text" 
                placeholder="Search a product" 
                className="rounded-lg border border-black w-80 p-4"
                onChange={(event) => context?.setSearchByTittle(event.target.value)}
            />
            <div className="grid grid-cols-4 gap-4 p-4">
                {context?.items?.map((item: any) => (
                    <Cards key={item.id} data={item} />
                ))}
            </div>
            <ProductDetail/>
        </Layout>  
    )
}
