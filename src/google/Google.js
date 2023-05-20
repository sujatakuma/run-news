import React, { useState } from 'react'
import './google.css'

const Google = () => {

  const[inputList, setList]=useState();
  const[item,setItem]=useState([]);

  const itemEvent=(event)=>{
    setList(event.target.value);

  }
  const listofItem=()=>{
    setItem((olditem)=>{
      return[...olditem,inputList]
      
    })

  }

  return (
    <div className='flex'>
        <div className='center_div'>
        <input type="text" onChange={itemEvent} placeholder='keep'/>
        <br/>
        <input type='text' className='input' placeholder='write a node'></input>
        <br/>
        <button onClick={listofItem}>+</button>
        </div>

        
        {item.map((itemval)=>{
          return(
            <h2>{itemval}</h2>
          )
        })}
    </div>
  )
}

export default Google
