import React from 'react'
//import Main from './Main'
const Node = (props) => {
    
  return (
    <div className='node_style'>
<i className='fa fa_times' aria-hidden="true"></i>
      <h1>{props.text}</h1>
      {/*<button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>*/}
      <button onClick={()=>{props.onSelect(props.id)}}>Close
        
  </button>
      <br/>
      
    </div>
  )
}

export default Node
