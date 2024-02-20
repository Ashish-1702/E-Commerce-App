import { useParams } from "react-router-dom";
import { Product_URL } from "../Constants";
import {useState,useEffect} from "react";

const ProductDetail = () =>{
      const params=useParams();
      const {id}=params;
      const[product,setProduct]=useState([]);

      useEffect(()=>{
          getProductSpecification()
      },[])

    async  function getProductSpecification (){
        const data=await fetch(Product_URL);
        const json=await data.json();
        setProduct(json);
        console.log(json);
    }

    return(
        <div className="list">
            <h1>Product id :{id}</h1>
            <img className = "image_ProductDetail" src={product[id-1]?.image}/>
            <h2> {product[id-1]?.title}</h2>
            <h3>{product[id-1]?.description}</h3>
            <h2>Rs {product[id-1]?.price}</h2>
            
            

        </div>
    )
}
export default ProductDetail;