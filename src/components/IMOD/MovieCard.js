import React from 'react'

const MovieCard = (props) => {
  return (
    <div>
      <div class="card" style={{ width: "18rem" }}>
  <img src={props.} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{props}</h5>
    <p class="card-text">{props}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
  )
}

export default MovieCard
