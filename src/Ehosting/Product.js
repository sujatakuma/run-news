import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Footer from './Footer'


const Product = () => {
  const { id } = useParams();
  console.log(id, "id")
  const [product, setProduct] = useState({});

  useEffect(() => {
    const getNewsDatas = async () => {
      const res = await fetch(`https://fakestoreapi.com/products/${id}`);
      const actualProduct = await res.json();
      console.log(actualProduct);
      setProduct(actualProduct);
    }
    getNewsDatas();
  }, [])
  !Object.keys(product).length > 0 && <div>Loading....</div>
  return (
    <div>

      <div className="card mb-3" style={{ width: "80%", height: "", margin: '5px', cursor: "pointer", alignItems: "center",marginLeft:'8rem', padding:'7px'}} >
        <div className="row g-0">
          <div className="col-md-4">
            <img style={{ height: "400px", width: "350px" }} src={product?.image} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{product?.title}</h5>
              <h7 className="card-title">{product?.category}</h7>
              
              <br></br>
<i style={{ margin: "2px",color:'yellow' }}>
              <i className="fas fa-star"  /><i class="fas fa-star" /><i class="fas fa-star" /><i class="fas fa-star" /></i>
              <p className="card-text">{product?.description}.</p>
              
              <h className="card-title">$-{product?.price}</h>
              <p className="card-text"><small class="text-muted"></small></p>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>

    </div>

  )
}

export default Product
