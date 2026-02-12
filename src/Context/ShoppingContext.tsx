import { createContext, useEffect, useState } from 'react'

export const ShoppingCartContext = createContext<any>(null)

export const ShoppingCartProvider = ({children}: any) => {

  	const [count, setCount] = useState(0)
  
 	 //Produc Detail
	const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
	const openProductDetail = () => setIsProductDetailOpen(true)
	const closeProductDetail = () => setIsProductDetailOpen(false)

	//CheckOut Side Menu
	const [isCheckOutSideMenuOpen, setIsCheckOutSideMenuOpen] = useState(false)
	const openCheckOutSideMenu = () => setIsCheckOutSideMenuOpen(true)
	const closeCheckOutSideMenu = () => setIsCheckOutSideMenuOpen(false)

	//Shopping Cart  . Add products to cart
	const [cartProducts, setCartProducts] = useState([])

	//Product to show in product detail
	const [productToShow, setProductToShow] = useState({})

	// Shopping Cart . Order
	const [order,setOrder] = useState([])

	//Get products from API
	const [items, setItems] = useState([])
	const [filteredItems, setFilteredItems] = useState([])

	//Get products from API with search
	const [searchByTittle, setSearchByTittle] = useState([])

	useEffect(() => {
		fetch("https://fakestoreapi.com/products")
		.then(res => res.json())
		.then(data => setItems(data))
	}, [])

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
			setProductToShow,
			isCheckOutSideMenuOpen,
			openCheckOutSideMenu,
			closeCheckOutSideMenu,
			order,
			setOrder,
			items,
			setItems,
			searchByTittle,
			setSearchByTittle
			}}>
		{children}
		</ShoppingCartContext.Provider>
	)
}