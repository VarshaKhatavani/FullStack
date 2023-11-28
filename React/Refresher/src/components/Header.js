import { Link } from 'react-router-dom';
import myImage from '../../Swiggy-2.png';
import useOnlineStatus from '../utils/useOnlineStatus';

const Header = () =>{

    const onlineStatus = useOnlineStatus();

    // logo
    // navigation menu
    return (
        <div className="flex justify-between bg-white shadow-lg mb-2 ">
            <div >
                <img className="w-26 h-24"  src={myImage} alt="" />
            </div>
            <div className='flex items-center font-semibold ' >
                <ul className="flex p-4 m-4 ">
                    <li className='px-4'>{onlineStatus ? <span>&#x1F7E2;</span> : <span>&#x1F534;</span>}</li>
                    <li className='px-4 hover:text-orange-500 cursor-pointer'><Link className="nav-items-menu" to={"/"}>Home</Link></li>
                    <li className='px-4 hover:text-orange-500 cursor-pointer'><Link className="nav-items-menu" to={"/about"}>About Us</Link></li>
                    <li className='px-4 hover:text-orange-500 cursor-pointer'><Link className="nav-items-menu" to={"/contact"}>Contact Us</Link></li>
                    <li className='hover:text-orange-500 cursor-pointer nav-items-menu'>Cart</li>                
                </ul>
            </div>            
        </div>
    )
}

export default Header;