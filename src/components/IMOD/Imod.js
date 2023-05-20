import React from 'react'
import './Imod.css'
import Homepg from './Homepg';
import Upcoming from './Upcoming';
import TopRated from './TopRated';
import Popular from './Popular';
import { Link } from "react-router-dom";
import {
    BrowserRouter,
    Routes,
    Route,

} from "react-router-dom";


const Imod = () => {
    return (
        <div>
            <BrowserRouter>
                <div className='header'>
                    <div className='nav'>
                        <ul>
                            <li>
                                <Link to="movie/:id" style={{textDecoration:"none"}}><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png' height={50} width={80}></img></Link>

                            </li>
                            <li>
                                <Link to="Popular" style={{textDecoration:"none",color:"white",fontSize:"30px"}}>Popular</Link>

                            </li>
                            <li>
                                <Link to="top" style={{textDecoration:"none",color:"white",fontSize:"30px"}}>TopRated</Link>

                            </li>
                            <li>
                                <Link to="Up" style={{textDecoration:"none" ,color:"white",fontSize:"30px"}}>Upcoming</Link>

                            </li>
                        </ul>

                    </div>
                </div>
                <Routes>
                    <Route>
                        <Route path='movie/:id' element={<Homepg />} />
                        <Route path='Popular' element={<Homepg />} />
                        <Route path='top' element={<TopRated />} />
                        <Route path='Up' element={<Upcoming />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Imod
