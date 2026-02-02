import { NavLink } from "react-router-dom"
import { ShoppingCartIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from "../../Context/ShoppingContext"
import { useContext } from "react"
    

let menu1 = [
    { name: "Shopi", to: "/", class: "font-semibold text-lg" },
    { name: "All", to: "/All"},
    { name: "Clothes", to: "/Clothes"},
    { name: "Electronics", to: "/Electronics"},
    { name: "Furnitures", to: "/Furnitures"},
    { name: "Toys", to: "/Toys"},
    { name: "Others", to: "/Others"},
]

let menu2 = [
    { name: "My Orders", to: "/my-orders" },
    { name: "My Account", to: "/my-account" },
    { name: "Sign In", to: "/sign-in" },
]

export const NavBar = () => {
    const context = useContext(ShoppingCartContext)

    let activeStyle = {
        textDecoration: "underline",
    }

    return (
        <nav className="flex justify-between font-light px-8 py-4 items-center text-sm fixed top-0 z-10 w-full">
            <ul className="flex gap-3 items-center">
                {
                    menu1.map((item, index) => (
                        <li key={index} className={item.class? item.class : ""}>
                            <NavLink to={item.to} style={({ isActive }) => 
                                isActive ? activeStyle : undefined}>
                                {item.name}
                            </NavLink>
                        </li>
                    ))
                }
            </ul>
            <ul className="flex gap-3 items-center">
                <li>
                    ccgonzalez@syc.com.co
                </li>
                {
                    menu2.map((item, index) => (
                        <li key={index}>
                            <NavLink to={item.to} style={({ isActive }) => 
                                isActive ? activeStyle : undefined}>
                                {item.name}
                            </NavLink>
                        </li>
                    ))
                }
                <li className="flex items-center gap-1">
                    <ShoppingCartIcon className="h-4 w-4"/>{context.count}
                </li>
            </ul>
        </nav>
    )
}