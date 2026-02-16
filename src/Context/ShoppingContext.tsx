import { createContext, useEffect, useState, useMemo } from 'react'

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
	const [searchByTittle, setSearchByTittle] = useState('')
	
	//Filter by category
	const [searchByCategory, setSearchByCategory] = useState(null)

	useEffect(() => {
		fetch("https://fakestoreapi.com/products")
		.then(res => res.json())
		.then(data => setItems(data))
	}, [])

	const filteredItemsByTittle = (items: any, searchByTittle: any) => {
		return items?.filter((item: any) => item.title.toLowerCase().includes(searchByTittle.toLowerCase()))
	}

	const filteredItemsByCategory = (items: any, searchByCategory: any) => {
		return items?.filter((item: any) => {
			const category = item.category.toLowerCase()
			
			if (searchByCategory === 'clothes') {
				return category === "men's clothing" || category === "women's clothing"
			} else if (searchByCategory === 'electronics') {
				return category === 'electronics'
			} else if (searchByCategory === 'furnitures') {
				return category === 'furnitures'
			} else if (searchByCategory === 'toys') {
				return category === 'toys'
			} else if (searchByCategory === 'others') {
				return category === 'jewelery' || (category !== 'electronics' && category !== "men's clothing" && category !== "women's clothing")
			}
			return true
		})
	}

	const filterBy = (searchType: any, items: any, searchByTittle: any, searchByCategory: any) => {
		if (searchType === 'BY_TITLE') {
			return filteredItemsByTittle(items, searchByTittle)
		}
		if (searchType === 'BY_CATEGORY') {
			return filteredItemsByCategory(items, searchByCategory)
		}
		if (searchType === 'BY_TITLE_AND_CATEGORY') {
			return filteredItemsByCategory(items, searchByCategory).filter((item: any) => 
				item.title.toLowerCase().includes(searchByTittle.toLowerCase())
			)
		}
		return items
	}

	useEffect(() => {
		if (searchByTittle && searchByCategory) {
			setFilteredItems(filterBy('BY_TITLE_AND_CATEGORY', items, searchByTittle, searchByCategory))
		} else if (searchByTittle && !searchByCategory) {
			setFilteredItems(filterBy('BY_TITLE', items, searchByTittle, searchByCategory))
		} else if (!searchByTittle && searchByCategory) {
			setFilteredItems(filterBy('BY_CATEGORY', items, searchByTittle, searchByCategory))
		} else {
			setFilteredItems(items)
		}
	}, [items, searchByTittle, searchByCategory])

	const contextValue = useMemo(() => ({
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
		setSearchByTittle,
		filteredItems,
		searchByCategory,
		setSearchByCategory
	}), [
		count,
		cartProducts,
		isProductDetailOpen,
		productToShow,
		isCheckOutSideMenuOpen,
		order,
		items,
		searchByTittle,
		filteredItems,
		searchByCategory
	])

	return (
		<ShoppingCartContext.Provider value={contextValue}>
			{children}
		</ShoppingCartContext.Provider>
	)
}

export default ShoppingCartProvider