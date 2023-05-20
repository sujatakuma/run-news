import React, { useContext } from 'react'
import C from './C'
import {Firstname} from './Appi'
import { Listname } from './Appi'
const B = () => {
  const fname=useContext(Firstname);
  const lname=useContext(Listname);

  return (
    <div>
      <h1>My name is {fname} {lname}</h1>
      <C></C>
    </div>
  )
}

export default B
