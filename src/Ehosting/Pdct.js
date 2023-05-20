import React from 'react'
import EcomNav from './EcomNav'
import AppDev from './AppDev'
//import { Routes, Route } from 'react-router-dom'
import Product from './Product'
import {Routes, Route} from "react-router-dom";
  
const Pdct = () => {
  return (
    <div>
      
      <EcomNav></EcomNav>
     
      <Routes>
        <Route path="/" element={<AppDev/>}/>
        <Route path="/products/:id" element={<Product/>}/>

      </Routes>
      

      
    </div>
  )
}

export default Pdct
