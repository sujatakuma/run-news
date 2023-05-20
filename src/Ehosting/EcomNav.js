import React from 'react'
import { Link } from 'react-router-dom'
//import EcomList from './EcomList'
import Couting from './Couting'
import Product from './Product'
import AppDev from './AppDev'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Ecomrs from './Ecomrs'
import Home from './Home'



const EcomNav = () => {
  return (

    <div>
      <BrowserRouter>
      <nav class="navbar navbar-expand-lg navbar-light bg-light" >
  <div class="container-fluid" >
    <Link class="navbar-brand" to="/" style={{fontSize:'2rem'}}><span style={{color:'blue'}}>e</span>Commerce</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">

      <Link style={{textAlign: 'center',color:'black'}} class="nav-link active" aria-current="page" to="/">Home</Link>
      <Link style={{textAlign: 'center',color:'black'}}class="nav-link active" aria-current="page" to="/menu">Product</Link>
      
      
    </div>
  </div>
</nav>
        
        <Routes>
        
          

            <Route path='/' element={<Home/>}/>
            <Route path='/products/:id' element={<Product/>} />
            <Route path='menu' element={<AppDev/>} />


         
        </Routes>
      </BrowserRouter>
    </div >
  )
}

export default EcomNav
