import { useEffect, useState } from "react";
import axios from "axios";
import {useDispatch} from "react-redux";
import { add } from "../Store/CartSlice"; // default import

export default function Product(){

    let [products, setProducts] = useState([]);

    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products")
            .then((result) => {            
            console.log(result.data);
            setProducts(result.data)
        })
    },[])

    let dispatch = useDispatch();

    let handleClick = (product) =>{
        dispatch(add(product))
    }

    return(
        <>
    <div>
    <div className="productsWrapper">
        {products.map((product, index) => { 
            return <><div key={product.id} className="card">
                <img src={product.image} alt="" style={{width:"30%", height:"70px"}}></img>
                <h6>{product.title}</h6>
            <h5>{product.price}$</h5>                      
          
        
          <button className="btn" onClick={()=>handleClick(product)}>Add to Cart</button>
          </div>
          </> 
        })}
     </div>
    </div>
        </>
    )

}