import React from 'react'
import {Firstname} from './Appi'
import {Listname} from'./Appi'
const C = () => {
  return (
    <div>
        <Firstname.Consumer>
          {(Fname)=>{
            return(
              <Listname.Consumer>
                {(lname)=>{
                return(
                  <h1>My name is {Fname} {lname}</h1>
                )
              }}
              </Listname.Consumer>
                
            )
        }}
        </Firstname.Consumer>
      
    </div>
  )
}

export default C

