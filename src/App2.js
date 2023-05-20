/*import React, { Component } from 'react'
import { Roobot } from "./Roobot";
import Cardlist from './Cardlist';
//import App from './App';
import Surchbar from "./components/Game/Surchbar";




class App2 extends Component {
    constructor() {
        super()
        this.state = {
            Roobot: Roobot,
            Searchfiled: ''
        }
    }
    onseacrhChange = (event) => {
        
    }

    render() {
        const filteredRoobot = this.state.Roobot.filter(Roobot => {
            return Roobot.name.toLowerCase().includes(this.state.Searchfiled.toLowerCase)
        })

        return (
            <div>
                <h1>Emoji</h1>
                <Surchbar SearchChange={this.onseacrhChange}></Surchbar>
                <Cardlist Roobot={filteredRoobot}></Cardlist>
            </div>

        )
    }
}*/
import React from "react";
//import Nav from "./components/hello/Nav"
import EcomList from "./Ehosting/EcomList"

import IndianNews from "./IndianNews";
//import Nav from "./components/hello/Nav";

//import Couting from "./Ehosting/Couting"
//import EcomNav from "./Ehosting/EcomNav"

//import React from 'react'
//import Grid from "./components/hello/Grid";
//import Nav from "./components/hello/Nav";
//import Background from "./components/hello/Background";
//import Imod from "./components/IMOD/Imod";
/*import List from "./components/hello/List";
import MenuItem from "./components/hello/MenuItem";
import IndianNews from "./IndianNews";


const menu=(val)=>{
    return(
        <MenuItem
        image={val.image}
        name={val.name}
        price={val.price}></MenuItem>
    )
}*/

const App2 = () => {
  return (
    <div>
        <EcomList></EcomList>
        
        {/*<Background></Background>
        <Nav></Nav>
        <Grid/>*/}
        {/*<Imod></Imod>*/}
        {/*List.map(menu)*/}
{/*<Nav></Nav>*/}
      {/*<EcomNav></EcomNav>*/}

        
        
        
      
    </div>
  )
}

export default App2



