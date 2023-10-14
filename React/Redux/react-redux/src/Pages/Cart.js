import { useSelector, useDispatch } from "react-redux"
import {remove} from "../Store/CartSlice"

export default function Cart(){

    let  items = useSelector((state)=>state.cart);
    console.log(items);

    let dispatch = useDispatch();

    let handleRemove = (id) =>{
        dispatch(remove(id));
    }

    return(
    <div>
        { 
            items.map((product)=>{
                   return  <div className="cartCard">
                   <img src={product.image} alt={product.title} width={60} height={60}></img>
                   <h5>{product.title}</h5>
                   <h5>{product.price}</h5>
                   <button className="remove-btn" onClick={()=> handleRemove(product.id)}>Remove from Cart</button>
                   </div>
            })
       }
    </div>
    )
}