import React, { useEffect, useState } from 'react'
//import EcomList from './EcomList'
import Couting from './Couting'
//import Coutpage from './Coutpage'
import Ecomrs from './Ecomrs'
//import EcomList from './EcomList'
const AppDev = () => {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        const getNewsDatas = async () => {
            const res = await fetch('https://fakestoreapi.com/products');
            const actualProduct = await res.json();
            console.log(actualProduct);
            setProducts(actualProduct);
        }
        getNewsDatas();
    }, [])
    return (
        <div>
            {
                products.length > 0 ?

                    <Ecomrs products={products}></Ecomrs>
                    :
                    <div>Loading....</div>
            }
            



        </div>
    )
}

export default AppDev
