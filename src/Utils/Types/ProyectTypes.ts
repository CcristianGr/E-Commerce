export interface OrderCardProps {
    title: string,
    imageUrl: string,
    price: number,
    onDelete?: () => void
}

export interface OrdersCardProps {
    totalPrice: string,
    totalProducts: string,
}

export interface Product {
    id: number | string
    title: string
    image: string
    price: number
    description: string
    category: string
}