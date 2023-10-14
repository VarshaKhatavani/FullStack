import { useEffect } from "react"; //useState
// import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import { add } from "../Store/CartSlice"; // default import
import { fetchProducts } from "../Store/productSlice";

export default function Product(){

    //let [products, setProducts] = useState([]);

    let dispatch = useDispatch();

    let handleClick = (product) =>{
        dispatch(add(product))
    }

    let{data,status} = useSelector((state)=>state.product);

    useEffect(()=>{
        // axios.get("https://fakestoreapi.com/products")
        //     .then((result) => {            
        //     console.log(result.data);
        //     setProducts(result.data)
        // })
        dispatch(fetchProducts());
    },[dispatch])

    if(status==="loading"){
        return <h2>...Loading</h2>
    }
    if(status==="error"){
        return <h2>Oops, Something went wrong</h2>
    }    

    return(
        <>
    <div>
    <div className="productsWrapper">
        {data.map((product, index) => { 
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