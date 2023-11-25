import { Link } from 'react-router-dom';
import myImage from '../../Swiggy-2.png';
import useOnlineStatus from '../utils/useOnlineStatus';

const Header = () =>{

    const onlineStatus = useOnlineStatus();

    // logo
    // navigation menu
    return (
        <div className="header">
            <div className="logo-container">
                <img src={myImage} alt="" width={60} height={60}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>{onlineStatus ? <span>&#x1F7E2;</span> : <span>&#x1F534;</span>}</li>
                    <li><Link className="nav-items-menu" to={"/"}>Home</Link></li>
                    <li><Link className="nav-items-menu" to={"/about"}>About Us</Link></li>
                    <li><Link className="nav-items-menu" to={"/contact"}>Contact Us</Link></li>
                    <li className='nav-items-menu'>Cart</li>
                </ul>
            </div>            
        </div>
    )
}

export default Header;