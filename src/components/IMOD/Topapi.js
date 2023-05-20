import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './Topapi.css'
const Topapi = () => {
    const [data, setData] = useState([]);
    const getTopmovie = async () => {

        const movie = await fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US')
        const nowData = await movie.json();
        console.log(nowData.results);
        setData(nowData.results);
    }

    useEffect(() => {
        getTopmovie();
    }, [])
    return (
        <div>
            <div style={{ color: "white" }}>

                TopRated

                {
                    data.map(movie => (

                        < div className="cards" >
                            <img className='cards__img' src={`https://image.tmdb.org/t/p/original/${movie && movie.backdrop_path} `} class="card-img-top" alt="..." />
                            <div class="cards__overlay">
                                <div className='cards__title'>{movie ? movie.original_title : ""}</div>
                                <div className='cards__runtime'>
                                    {movie ? movie.release_date : ""}
                                    <span className='cards__rating'>
                                        {movie ? movie.vote_average : ""}
                                        <i class="fas fa-star" />{''}
                                    </span>
                                </div>
                                <div className='cards__title'>{movie ? movie.overviews : " "}</div>
                            </div>
                        </div>


                    ))

                }
            </div>
        </div>

    )
}

export default Topapi
