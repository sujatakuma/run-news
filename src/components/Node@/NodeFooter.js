import React from 'react'
import './Nodef.css'

const NodeFooter = () => {
    const year=new Date().getFullYear();
  return (
    <div className='footer'>
      <h3>Keep  © {year}</h3>
      
    </div>
  )
}

export default NodeFooter
