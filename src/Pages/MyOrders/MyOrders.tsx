import { useContext } from "react"
import { Layout } from "../../Components/Layout/Layout"
import { ShoppingCartContext } from "../../Context/ShoppingContext"
import { OrdersCard } from "../../Components/OrdersCard/OrdersCard"
import { Link } from "react-router-dom"

export const MyOrders = () => {
    const context = useContext(ShoppingCartContext)
    console.log(context.order)
    return (
        <Layout>
            <div className="flex items-center justify-center relative w-80">
                <h1>My Orders</h1>
            </div>
            <div className='flex flex-col w-80'>
                {
                    context.order?.map((order:any) => (
                    <Link key={order.id} to={`/my-orders/${order.id}`}>
                        <OrdersCard totalPrice={order.totalPrice} totalProducts={order.totalProducts}/>
                    </Link>
                    ))
                }
            </div>
        </Layout>  
    )
}