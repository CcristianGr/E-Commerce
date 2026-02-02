import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from "../../Context/ShoppingContext"
import { useContext } from "react"

export const ProductDetail = () => {
    const context = useContext(ShoppingCartContext)

    return(
        <aside className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} h-[calc(100vh-68px)] top-17 w-90 flex flex-col fixed right-0 border border-black rounded-lg bg-white px-5 py-2`}>
            <div className="flex justify-between items-center mb-2 ">
                <h2 className="text-xl font-bold">Detail</h2>
                <div>
                    <XMarkIcon 
                    onClick={()=> context.closeProductDetail()}
                    className="h-6 w-6 text-black" />
                </div>
            </div>
            <figure>
                <img 
                className='w-full h-full rounded-lg' 
                src={context.productToShow?.images?.[0]} 
                alt={context.productToShow?.title} />
            </figure>
            <p className='flex flex-col'>
                <span className="font-medium text-2xl">${context.productToShow?.price}</span>
                <span className="font-medium text-md py-2">{context.productToShow?.title}</span>
                <span className="text-sm">{context.productToShow?.description}</span>
            </p>
        </aside>
    )
}