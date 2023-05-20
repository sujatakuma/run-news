import React from 'react'
import List from './List'
import './Grid.css'

function MenuItem(props) {
    return(
        <div className='menuItem'>
            <h1> <img src={props.image} alt="" srcset="" /></h1>
            <h4>{props.price}</h4>
            <h4>{props.name}</h4>
            </div>
        
    )
    
}
export default MenuItem
