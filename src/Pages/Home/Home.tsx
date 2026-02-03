import { useEffect, useState } from "react"
import { Cards } from "../../Components/Cards/Cards"
import { Layout } from "../../Components/Layout/Layout"
import { ProductDetail } from "../../Components/ProductDetail/ProductDetail"

export const Home = () => {
    const [items, setItems] = useState([])

    useEffect(() => {
        fetch("https://api.escuelajs.co/api/v1/products")
        .then(res => res.json())
        .then(data => setItems(data))
    }, [])
    
  return (
        <Layout>
            <div className="grid grid-cols-4 gap-4 p-4">
                {items?.map((item: any) => (
                    <Cards key={item.id} data={item} />
                ))}
            </div>
            <ProductDetail/>
        </Layout>  
    )
}
