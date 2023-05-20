import React from 'react'
import { Link } from 'react-router-dom'
//import Product from './Product'
//import EcomNav from './EcomNav'
//import Product from './Product'
//import Pdct from './Pdct'

const Ecomrs = ({products=[]}) => {
  return (

    <div>

      <div>
        <div className="container my-4">
          <h3 style={{textAlign: 'center'}}>Lowest Prices
Best Quality Shopping</h3>
          <div className="row">
            {
              products.map((product)=>{
                console.log(product, 'product')
                const{id, title, price, image, category, description} = product;
                return(
                  <div className="card" style={{ width: "19rem", height: "26rem", margin: '25px', cursor: "pointer",textAlign:"center"}}>
              <img src={image} height={220} width={250} className="card-img-top" alt='' />

              <div className="card-body">
                <h7 className="card-title">{title}</h7>
                <h3 className="card-text">$-{price}</h3>
                <i className="fas fa-star" style={{ margin: "2px" }} /><i class="fas fa-star" /><i class="fas fa-star" /><i class="fas fa-star" />

                <Link to={`/products/${id}`} target='blank' className="btn btn-primary"  >by now</Link>
              </div>
              </div>

                )
              })
            }

            
          </div>
        </div>
        </div>



      </div>
      )
}

      export default Ecomrs
