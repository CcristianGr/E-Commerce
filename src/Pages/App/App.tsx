import { BrowserRouter, useRoutes } from 'react-router-dom'
import { Home } from '../Home/Home'
import { NotFound } from '../NotFound/NotFound'
import { SignIn } from '../SignIn/SignIn'
import { MyOrders } from '../MyOrders/MyOrders'
import { MyAccount } from '../MyAccount/MyAccount'
import { NavBar } from '../../Components/NavBar/Navbar'
import { CheckOutSideM } from '../../Components/CheckOutSideMenu/CheckOutSideM'
import './App.css'
import { ShoppingCartProvider } from '../../Context/ShoppingContext'

const AppRoutes = () =>{
  let routes = useRoutes([
    {path: '/', element: <Home />},
    {path: '/my-account', element: <MyAccount />},
    {path: '/my-orders', element: <MyOrders />},
    {path: '/sign-in', element: <SignIn />},
    {path: '*', element: <NotFound />},
  ])
  return routes
}

const App = () => {

  return (
    <ShoppingCartProvider>
      <BrowserRouter basename="/React-Project">
        <NavBar/>
        <AppRoutes />
        <CheckOutSideM />
      </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export default App
