import { XMarkIcon } from '@heroicons/react/24/solid'
import type { OrderCardProps } from '../../Utils/Types/ProyectTypes'

export const OrderCard = (props: OrderCardProps) => {

    let renderXMarkIcon
    if(props.onDelete){
       renderXMarkIcon = <XMarkIcon onClick={props.onDelete} className="h-6 w-6 text-black cursor-pointer" /> 
    }

    return(
        <div className="flex justify-between items-center">
            <div className='flex items-center gap-2'>
                <figure className='w-20 h-20'>
                    <img className="w-full h-full object-contain rounded-lg" src={props.imageUrl} alt={props.title} />
                </figure>
                <p className='text-sm font-light'>{props.title}</p>
            </div>
            <div className='flex items-center gap-2'>
                <p className='text-lg font-medium'>${props.price}</p>
                {
                    renderXMarkIcon
                }
            </div>
        </div>
    )
}