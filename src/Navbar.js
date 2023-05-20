import React from "react"
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
import About from './About';
import Card from './Card';

import {
  BrowserRouter,
  Routes,
  Route,

} from "react-router-dom";



const Navbar = (props) => {
  return (
    <div>
      <BrowserRouter>
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
          <div className="container-fluid">
            <a className="navbar-brand" href="#">{props.title}</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                <li className="nav-item">
                  {/*<a className="nav-link active" aria-current="page" href="#">Home</a>*/}
                  <Link className="nav-link active" to="/Home">Home</Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link active" to="/about">About</Link>
                  {/*<a className="nav-link" href="#">{props.about}</a>*/}
                </li>
                <li className="nav-item">

                  <Link className="nav-link active" to="/card">Card</Link>
                </li>

              </ul>
              <div class={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                <input class="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault" />
                <label class="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
              </div>

            </div>

          </div>

        </nav>
        <Routes>
          <Route>
            <Route path='about' element={<About />} />
            <Route path='card' element={<Card />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

/*Navbar.propTypes={
  titel: PropTypes.string
}*/



export default Navbar;