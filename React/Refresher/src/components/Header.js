import { Link } from 'react-router-dom';
import myImage from '../../Swiggy-2.png';
import useOnlineStatus from '../utils/useOnlineStatus';
import { useContext, useState } from 'react';
import UserContext from "../utils/UserContext";
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";


const Header = () =>{

    const onlineStatus = useOnlineStatus();
    const [btnLogin, setBtnLoginLogout] = useState("Sign In");

    const {loggedInUser} = useContext(UserContext);
    console.log(loggedInUser);

    const cartItems = useSelector((store)=>store.cart.items);
    console.log(cartItems);

    const totalItems =  useSelector((store)=> store.cart.totalItems);
    console.log(totalItems);

    // logo
    // navigation menu
    return (
        <div className="flex justify-between bg-white shadow-lg mb-2 ">
            <div >
                <img className="w-26 h-24"  src={myImage} alt="" />
            </div>
            <div className='flex items-center font-semibold ' >
                <ul className="flex p-4 m-4 items-center ">
                    <li className='px-4'>{onlineStatus ? <span>&#x1F7E2;</span> : <span>&#x1F534;</span>}</li>
                    <li className='px-4 hover:text-orange-500 cursor-pointer'><Link to={"/"}>Home</Link></li>
                    <li className='px-4 hover:text-orange-500 cursor-pointer'><Link to={"/about"}>About Us</Link></li>
                    <li className='px-4 hover:text-orange-500 cursor-pointer'><Link to={"/contact"}>Contact Us</Link></li>
                    
                    <li className='px-4 hover:text-orange-500'>
                    <button onClick={()=>{
                        btnLogin === "Sign In" ? setBtnLoginLogout("Sign Out") : setBtnLoginLogout("Sign In");
                    }}>
                        {btnLogin}
                    </button>                
                    </li>
                    <li className="px-4 font-bold">{loggedInUser}</li>
                    <li className='px-4 hover:text-orange-500 cursor-pointer nav-items-menu'><Link to={"/cart"}>   <FontAwesomeIcon icon={faShoppingCart} className=" text-2xl mt-2" /> 
                        <span className="bg-orange-500 text-white rounded-full w-4 h-4 absolute -mt-8 ml-4 flex items-center justify-center text-xs">
                            {totalItems}
                        </span>             
                    </Link></li>
                </ul>
            </div>            
        </div>
    )
}

export default Header;