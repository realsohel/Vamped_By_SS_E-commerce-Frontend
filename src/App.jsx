import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import CartPage from './pages/CartPage'
import Checkout from './pages/Checkout'
import ProductDetailsPage from './pages/ProductDetailsPage'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/'element={<Home/>}/>
          <Route exact path='/login'element={<LoginPage/>}/>
          <Route exact path='/register'element={<SignupPage/>}/>
          <Route exact path='/cart'element={<CartPage/>}/>
          <Route exact path='/checkout'element={<Checkout/>}/>
          <Route exact path='/product-details'element={<ProductDetailsPage/>}/>
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
