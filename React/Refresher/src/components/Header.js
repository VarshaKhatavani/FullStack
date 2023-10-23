import myImage from '../../logo.png';

const Header = () =>{
    // logo
    // navigation menu
    return (
        <div className="header">
            <div className="logo-container">
                <img src={myImage} alt="" width={80} height={80}/>
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