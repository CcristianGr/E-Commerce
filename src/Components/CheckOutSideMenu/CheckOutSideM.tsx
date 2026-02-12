import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from "../../Context/ShoppingContext"
import { useContext } from "react"
import { OrderCard } from '../OrderCard/OrderCard'
import { totalPrice } from '../../Utils/Util-Ecommerce'
import { Link } from 'react-router-dom'
import type { Product } from '../../Utils/Types/ProyectTypes'

export const CheckOutSideM = () => {
    const context = useContext(ShoppingCartContext)

    const handleDelete = (id: string) => {
        const filteredProducts = context.cartProducts.filter((product: Product) => product.id !== id)
        context.setCartProducts(filteredProducts)
    }

    const handleCheckout = () => {
        const orderToAdd = {
            id: Math.random().toString(10).substring(2, 6),
            date: new Date(),
            products: context.cartProducts,
            totalProducts: context.cartProducts.length,
            totalPrice: totalPrice(context.cartProducts)
        }
        context.setOrder([...context.order, orderToAdd])
        context.setCartProducts([])
    }

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
            <div className='px-6 overflow-y-scroll flex-1'>
                {
                    context.cartProducts.map((product: Product) => (
                        <OrderCard
                        key={product.id}
                        title={product.title}
                        imageUrl={product.image}
                        price={product.price}
                        onDelete={() => handleDelete(product.id as string)}
                        />
                    ))
                }
            </div>
            <div className='px-6 mt-4 border-t pt-4'>
                <p className='flex justify-between items-center mb-2'>
                    <span className='font-medium text-lg'>Total:</span>
                    <span className='font-bold text-xl'>${totalPrice(context.cartProducts).toFixed(2)}</span>
                </p>
                <Link to="/my-orders/last">
                    <button onClick={() => handleCheckout()} className='w-full bg-black text-white py-3 rounded-lg font-medium cursor-pointer'>Checkout</button>
                </Link>
            </div>
        </aside>
    )
}