import type { OrdersCardProps } from '../../Utils/Types/ProyectTypes'

export const OrdersCard = (props: OrdersCardProps) => {
    const hora = new Date().toLocaleTimeString()
    return(
        <div className="flex justify-between items-center mb-3 border border-black">
            <p>
                <span>{hora}</span>
                <span>{props.totalProducts}</span>
                <span>{props.totalPrice}</span>
            </p>
        </div>
    )
}