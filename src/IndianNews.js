import React, { useEffect, useState } from 'react'
import IndianN from './IndianN';
import './Indian.css'

const IndianNews = () => {
  const [data, setData] = useState([]);

  const getNewsData = async () => {
    const res = await fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=29eef3e2745349fcb53feb305971991a');
    const actualData = await res.json();
    console.log(actualData.articles);
    setData(actualData.articles);


  }

  useEffect(() => {
    getNewsData();
  }, [])


  return (
    <>
      <div className="container my-4">
        <h1 > TOP NEWS OF INDIA</h1>
        <div className="row">

          {data.map((element) => {
            return <div className="col-md-4" key={element.url}>
              <IndianN title={element.title.slice()} description={element.description} urlToImage={element.urlToImage} NewUrl={element.url} />
            </div>
          })}
        </div>
      </div>

    </>
  )
}

export default IndianNews
