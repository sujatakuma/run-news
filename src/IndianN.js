import React from 'react'
import './Indian.css'
const IndianN = (props) => {

  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <img src={props.urlToImage} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.title.slice(0, 45)}</h5>
          <p className="card-text">{props.description}</p>
          <a href={props.NewUrl} target='blank' className="btn btn-primary">Read more</a>
        </div>
      </div>
    </div>
  )
}

export default IndianN
