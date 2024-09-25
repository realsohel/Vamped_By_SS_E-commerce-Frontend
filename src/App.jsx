import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/'element={<Home/>}/>
          <Route exact path='/login'element={<LoginPage/>}/>
          <Route exact path='/register'element={<SignupPage/>}/>
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
