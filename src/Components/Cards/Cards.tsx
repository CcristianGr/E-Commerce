import { useContext } from "react"
import { ShoppingCartContext } from "../../Context/ShoppingContext"
import { PlusIcon } from '@heroicons/react/24/solid'

interface CardsProps {
  data: any
}

export const Cards = ({ data }: CardsProps) => {
    const context = useContext(ShoppingCartContext)

    const showProduct = (product: any) => {
        context.setProductToShow(product)
        context.openProductDetail()
    }

    const addProductsToCard = (event:any, productData: any) => {
        const current = context.cartProducts ?? []

        event.stopPropagation()
        context.setCount(context.count + 1)
        context.setCartProducts([...current, productData])
        context.openCheckOutSideMenu()
    }

    return (
        <div className="w-56 h-60 rounded-lg p-4 flex flex-col justify-">
            <figure className="relative w-full h-4/5">
                <div 
                    className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1 cursor-pointer"
                    onClick={(e) => addProductsToCard(e, data)}>
                       <PlusIcon className="h-4 w-4" />
                </div>
                <img 
                    src={data.image} 
                    alt={data.title} 
                    className="w-full h-full object-contain rounded-lg cursor-pointer"
                    onClick={() => showProduct(data)}
                />
                <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">{data.category}</span>
            </figure>
            <p className="flex justify-between">
                <span>{data.title}</span>
                <span>${data.price}</span>
            </p>
        </div>
    )
}