import { useContext } from 'react'
import type { OrdersCardProps } from '../../Utils/Types/ProyectTypes'
import { ShoppingCartContext } from '../../Context/ShoppingContext'

export const OrdersCard = (props: OrdersCardProps) => {
    const context = useContext(ShoppingCartContext)
    
    const hora = context.order[0].date.toString().split(' GMT')[0]

    return(
        <div className="relative flex justify-between items-center mb-4 p-4 
                        bg-white border border-gray-200 rounded-lg shadow-sm
                        hover:shadow-md hover:border-gray-300 
                        transition-all duration-300 ease-in-out
                        cursor-pointer group">
            <div className='flex justify-between items-center w-full gap-4'>
                {/* Fecha y hora */}
                <div className='flex flex-col flex-1'>
                    <span className='text-xs text-gray-500 font-medium'>Fecha</span>
                    <span className='text-sm font-semibold text-gray-800'>{hora}</span>
                </div>
                
                {/* Separador vertical */}
                <div className='h-10 w-px bg-gray-200'></div>
                
                {/* Total de productos */}
                <div className='flex flex-col items-center flex-1'>
                    <span className='text-xs text-gray-500 font-medium'>Productos</span>
                    <span className='text-sm font-bold text-blue-600'>{props.totalProducts}</span>
                </div>
                
                {/* Separador vertical */}
                <div className='h-10 w-px bg-gray-200'></div>
                
                {/* Precio total */}
                <div className='flex flex-col items-end flex-1'>
                    <span className='text-xs text-gray-500 font-medium'>Total</span>
                    <span className='text-lg font-bold text-green-600'>${props.totalPrice}</span>
                </div>
            </div>
            
            {/* Indicador visual al hacer hover */}
            <div className='absolute inset-0 bg-gradient-to-r from-transparent via-blue-50 to-transparent 
                            opacity-0 group-hover:opacity-60 transition-opacity duration-300 rounded-lg pointer-events-none'></div>
        </div>
    )
}