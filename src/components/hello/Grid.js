import React from "react";
import List from "./List";

import './Grid.css'
import MenuItem from "./MenuItem";



const Grid = () => {
  return (
    <div className="manu">
      <h3>Order Your Favourite Dish</h3>
      <h1 className="menuTitle"></h1>
      <div className="menuList">

        {List.map((val, key) => {
          return (
            <MenuItem
              image={val.image}
              name={val.name}
              price={val.price}></MenuItem>
          )
        })}
        {/*<img src={props.image} alt="" srcset="" />*/}
      </div>


      {/* <h2>{props.name}</h2>
        <span>{props.price}</span> */}

    </div>

  )
}

export default Grid

