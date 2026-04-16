
import { Route, Routes } from 'react-router-dom'
import './App.css'
//pages
import Home from './pages/Home'
import Auth from './pages/Auth'
import Checkout from './pages/Checkout'

//components
import Navbar from './components/Navbar'
import ProductDetails from './pages/ProductDetails'

function App() {

  return (
    <div className='app'>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/auth" element={<Auth/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
        <Route path="/products/:id" element={<ProductDetails/>}/>
      </Routes>
      
    </div>
  )
}

export default App
