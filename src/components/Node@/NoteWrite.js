import React from 'react'
import './Notewrite.css'
const NoteWrite = (props) => {
  const deleteNode=()=>{
    props.deleteItem(props.id);
  }
  return (
    
    <div className='note'>
      
        <h1 >{props.title}</h1>
        <br/>
        <p  >{props.content}</p>
        <button >
            <img src="https://cdn-icons-png.flaticon.com/512/1345/1345874.png"onClick={deleteNode} height={40} width={40} alt="" srcset="" />
            
        </button>
        </div>
      
   
    
  )
}

export default NoteWrite
