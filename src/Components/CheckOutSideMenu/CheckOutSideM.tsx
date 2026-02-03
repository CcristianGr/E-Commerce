import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from "../../Context/ShoppingContext"
import { useContext } from "react"
import { OrderCard } from '../OrderCard/OrderCard'

interface Product {
    id: number | string
    title: string
    image: string
    price: number
    description: string
    category: string
}

export const CheckOutSideM = () => {
    const context = useContext(ShoppingCartContext)

    return(
        <aside className={`${context.isCheckOutSideMenuOpen ? 'flex' : 'hidden'} h-[calc(100vh-68px)] top-17 w-90 flex flex-col fixed right-0 border border-black rounded-lg bg-white px-5 py-2`}>
            <div className="flex justify-between items-center mb-2 ">
                <h2 className="text-xl font-bold">My Order</h2>
                <div>
                    <XMarkIcon 
                    onClick={()=> context.closeCheckOutSideMenu()}
                    className="h-6 w-6 text-black cursor-pointer" />
                </div>
            </div>
            {
                context.cartProducts.map((product: Product) => (
                    <OrderCard
                    key={product.id}
                    title={product.title}
                    imageUrl={product.image}
                    price={product.price}
                    />
                ))
            }
        </aside>
    )
}