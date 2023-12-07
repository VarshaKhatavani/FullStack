import { Link } from 'react-router-dom';
import myImage from '../../Swiggy-2.png';
import useOnlineStatus from '../utils/useOnlineStatus';
import { useContext, useState } from 'react';
import UserContext from "../utils/UserContext";
import { useSelector } from 'react-redux';

const Header = () =>{

    const onlineStatus = useOnlineStatus();
    const [btnLogin, setBtnLoginLogout] = useState("Sign In");

    const {loggedInUser} = useContext(UserContext);
    console.log(loggedInUser);

    const cartItems = useSelector((store)=>store.cart.items);
    console.log(cartItems);

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
                    <li className='px-4 hover:text-orange-500 cursor-pointer nav-items-menu'><Link to={"/cart"}> Cart ({cartItems.length} items) </Link></li>
                    <li className='px-4 hover:text-orange-500'>
                    <button onClick={()=>{
                        btnLogin === "Sign In" ? setBtnLoginLogout("Sign Out") : setBtnLoginLogout("Sign In");
                    }}>
                        {btnLogin}
                    </button>                
                    </li>
                    <li className="px-4 font-bold">{loggedInUser}</li>
                </ul>
            </div>            
        </div>
    )
}

export default Header;