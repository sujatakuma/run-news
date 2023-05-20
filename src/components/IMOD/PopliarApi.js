import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import'./popularapi.css'
//import MovieCard from './MovieCard';

const PopliarApi = () => {
  const [data, setData] = useState([]);
  const getMovieData = async () => {


    const movie = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US')
    const actualData = await movie.json();
    console.log(actualData.results);
    setData(actualData.results);

  }
  useEffect(() => {
    getMovieData();
  }, [])

  return (
    <div>
      <div className='container my-3'>
        Popular
        <div className='row'>
          {data.map(movie => (
            <Link state={{TextDecortion:"none",color:"white"}} to={`/movie/${movie.id}`}>
              <div className='col-md-4'>
                <div className='posterImage'>

                  <img src={`https://image.tmdb.org/t/p/original/${movie && movie.backdrop_path}`} />
                </div>
                <div className='posterImage__overlay'>
                  <div className='posterImage__title'>{movie ? movie.original_title:""}</div>
                  <div className='posterImage__runTime'>
                  {movie ? movie.release_date:""}
                  <span className='posterImage__rating'>
                    {movie ? movie.vote_average:""}
                    <i class="fas fa-star"/>{''}
                  </span>
                  </div>
                  <div className='posterImge__description'>{movie ? movie.overview:""}</div>
                </div>
              </div>
            </Link>

          ))
          }


        </div>
      </div>
    </div>
  )
}

export default PopliarApi
