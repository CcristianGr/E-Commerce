import { useContext } from "react"
import { Layout } from "../../Components/Layout/Layout"
import { ShoppingCartContext } from "../../Context/ShoppingContext"
import { OrderCard } from "../../Components/OrderCard/OrderCard"
import type { Product } from "../../Utils/Types/ProyectTypes"
import { Link } from "react-router-dom"
import { ChevronLeftIcon } from "@heroicons/react/24/solid"


export const MyOrder = () => {
    const context = useContext(ShoppingCartContext)
    const getPath = window.location.pathname.toString().split('/').slice(-1)[0]
    let orderCart = null
    
    if(getPath === "last"){
        orderCart = context.order?.slice(-1)[0]
    }else{
        orderCart = context.order?.find((order:any) => order.id === getPath)
    }

    return (
        <Layout>
            <div className="flex items-center justify-center relative w-80">
                <Link to="/my-orders" className=" absolute left-0">
                    <ChevronLeftIcon className="h-6 w-6 text-black cursor-pointer" />
                </Link>
                <h1>My Order</h1>
            </div>
            <div className='px-6 overflow-y-scroll flex-1'>
                {
                    orderCart.products.map((product: Product) => (
                        <OrderCard
                        key={product.id}
                        title={product.title}   
                        imageUrl={product.image}
                        price={product.price}
                        />
                    ))
                }
            </div>
        </Layout>  
    )
}

