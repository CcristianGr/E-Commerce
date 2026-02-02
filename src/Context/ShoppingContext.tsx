import { createContext, useState } from 'react'

export const ShoppingCartContext = createContext<any>(null)

export const ShoppingCartProvider = ({children}: any) => {
    const [count, setCount] = useState(0)
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    const openProductDetail = () => setIsProductDetailOpen(true)
    const closeProductDetail = () => setIsProductDetailOpen(false)
    const [cartProducts, setCartProducts] = useState([])

    // product detail
    const [productToShow, setProductToShow] = useState({})

  return (
    <ShoppingCartContext.Provider value={{
        count,
        setCount,
        cartProducts,
        setCartProducts,
        isProductDetailOpen,
        openProductDetail,
        closeProductDetail,
        productToShow,
        setProductToShow
        }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}