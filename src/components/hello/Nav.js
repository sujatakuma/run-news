import React from "react"
import './Nav.css'
import Breackfast from "./Breackfast";
import Lunch from "./Lunch";
import Evening from "./Evening";
import Dinner from "./Dinner";
import All from "./All";
import Prodect from "../../Prodect";

import { Link } from "react-router-dom";
import {
  BrowserRouter,
  Routes,
  Route,

} from "react-router-dom";


const Nav = () => {
  return (
    <div>
      <BrowserRouter>
        <div className="header">
        <ul className="nav justify-content-center" >
  <li className="nav-item">
    {/*<a className="nav-link active" aria-current="page" href="#">Breackfast</a>*/}
    <Link className="nav-link active" to='/bk'>Breackfast</Link>
  </li>
  <li className="nav-item">
    {/*<a className="nav-link" href="#">Lunch</a>*/}
    <Link className="nav-link" to='/prodect/ ${prodectid}'>prodect</Link>
  </li>
  <li className="nav-item">
    {/*<a className="nav-link" href="#">Evening</a>*/}
    <Link className="nav-link" to='/ev'>Evening</Link>

  </li>
   <li className="nav-item">
    {/*<a className="nav-link" href="#">Dinner</a>*/}
    <Link className="nav-link" to='/dinner'>Dinner</Link>
    
  </li>
  <li className="nav-item">
    {/*<a className="nav-link" href="#">All</a>*/}
    <Link className="nav-link" to='/all'>All</Link>
    
  </li>
  
</ul>
</div>  
    
    <Routes>
        <Route>
          <Route path='bk' element={<Breackfast/>}/>
          <Route path='prodect/:id' element={<Prodect/>}/>
          <Route path='ev' element={<Evening/>}/>
          <Route path='dinner' element={<Dinner/>}/>
          <Route path='all' element={<All/>}/>

        </Route>
      </Routes>
     
    </BrowserRouter>
    
    </div>
  )
}

export default Nav



