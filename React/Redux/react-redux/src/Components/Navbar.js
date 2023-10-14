import { Link } from "react-router-dom";
import {useSelector} from "react-redux";

export default function Navbar(){

    //A function that takes the Redux state as its argument 
    //and returns the specific piece of state that you want to select
    let items = useSelector((state)=>state.cart);
    console.log(items);

    return(
    <>
        <div style={{display:"flex", alignItems:"center", justifyContent:"space-between", padding:"4px"}}>
            <span>Redux Store</span>
            <div>
                <Link className="navLink" to="/">Home</Link>
                <Link className="navLink" to="/cart">Cart</Link>
                <span className="cartCount">Cart Items : {items.length}</span>
            </div>
        </div>
    </>
    )
}