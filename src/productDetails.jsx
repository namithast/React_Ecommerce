import { useState,useEffect } from "react"
import "./productdetails.css"
import axios from "axios"
import {useParams} from "react-router-dom"
function Productdetails() {
    const [productData,setProductData]=useState({})
let {id}=useParams()
    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products/'+id)
        .then(res=>{
          setProductData (res.data)
          console.log("test");
          
         })
         .catch(err=>{
          console.log(err);
          
         })
      },[id])
  return (
    <>
    
    <h1 className="productStyle">Product List</h1>
    <div className="details">
        
      <img src={productData.image}></img>
      <h3>{productData.title}</h3>
      <h5>{productData.price}</h5>
    </div>
    </>
  )
}

export default Productdetails