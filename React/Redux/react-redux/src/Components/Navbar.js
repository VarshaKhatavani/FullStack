import { Link } from "react-router-dom";

export default function Navbar(){
    return(
    <>
        <div style={{display:"flex", alignItems:"center", justifyContent:"space-between", padding:"4px"}}>
            <span>Redux Store</span>
            <div>
                <Link className="navLink" to="/">Home</Link>
                <Link className="navLink" to="/cart">Cart</Link>
                <spant className="cartCount">Cart Items : 0</spant>
            </div>
        </div>
    </>
    )
}