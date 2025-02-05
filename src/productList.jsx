import{ useState ,useEffect} from 'react';
import Product from './product.jsx';
import "./index.css";
function Productlist() {
    const[products,setProduct]=useState([]);


    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(json=>
      {
        setProduct(json);
      });
    },[]);


  return (
    <div>
      <h1 className="productStyle">Product List</h1>
      <div className="product-list">
               {products.map((product,index)=>{
                return(
                  <div className="product-item" key={index}>
                    <Product productData={product} />
                    </div>
                )
               })}
            </div>
    </div>
  )
}

export default Productlist