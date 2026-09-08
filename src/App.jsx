import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import CheckOutbar from './pages/checkout/CheckOutbar'
import ProductPage from './pages/productDetails/ProductDe'
import Casual from './pages/casualpage/CasualPage'
 
 
 
export default function App() {
  return (
    <>
 
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/categorycarts' element={<Casual />}/>
        <Route path='/checkout' element={<CheckOutbar />}/>
        <Route path="/product/:productId" element={<ProductPage />} />
      </Routes>
 
    </>
  )
}