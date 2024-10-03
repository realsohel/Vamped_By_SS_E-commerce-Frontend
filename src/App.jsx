import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import CartPage from './pages/CartPage'
import Checkout from './pages/Checkout'
import ProductDetailsPage from './pages/ProductDetailsPage'
import Protected from './features/auth/Protected'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/'element={<Protected><Home/></Protected> }/>
          <Route exact path='/login'element={<LoginPage/>}/>
          <Route exact path='/register'element={<SignupPage/>}/>
          <Route exact path='/cart'element={<Protected><CartPage/></Protected>}/>
          <Route exact path='/checkout'element={<Protected><Checkout/></Protected>}/>
          <Route exact path='/product-details/:id'element={<Protected><ProductDetailsPage/></Protected>}/>
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
