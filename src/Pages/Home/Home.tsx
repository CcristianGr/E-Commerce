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
            <Cards data={items}/>
            <ProductDetail/>
        </Layout>  
    )
}
