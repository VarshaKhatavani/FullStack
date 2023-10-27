import myImage from '../../Swiggy-2.png';

const Header = () =>{
    // logo
    // navigation menu
    return (
        <div className="header">
            <div className="logo-container">
                <img src={myImage} alt="" width={60} height={60}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Cart</li>
                </ul>
            </div>            
        </div>
    )
}

export default Header;