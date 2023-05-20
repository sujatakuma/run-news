/*import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'

const Prodect = () => {
  const {id}=useParams()
  const [prodect,setProdect]=useState([])
  const[loading,setLoading]=useState(false)

  useEffect(()=>{
    const getProdect= async()=>{
      setLoading(true)
      const rec=await fetch(`https://fakestoreapi.com/products/${id}`)
      setProdect(await rec.json());
      setLoading(false)

      
    }
    getProdect();
  },[]);
  const Loading=()=>{
return(
  <>
  Loading....
  </>
)
  }
  const showProdect=()=>{

    return(
      <>
      <div className='col md-6'>
        <img src={prodect.image} alt={prodect.title}/>

      </div>
      </>
    )
  }

  return (
    <div>
<div className='container'>
  <div className='row'>
    {loading ? <Loading/>:<showProcat/>}
  </div>

</div>
      
    </div>
  )
}

export default Prodect*/
