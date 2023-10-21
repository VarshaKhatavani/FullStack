import React from "react";
import ReactDOM  from "react-dom/client";
import myImage from './logo.png';

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

const AppLayout = () =>{
   return <div className="body">
            <Header/> 
            <Content/>
          </div> 
}

const Content = () =>{
    return ( 
        <>
            <div className="search">search</div>        
            <RestaurantCard/> 
        </>
    )
}

const RestaurantCard = () =>{
    return <div className="res-content">
            <div className="foodCard">
                <img className="card-img" src="https://source.unsplash.com/1600x1000/?food" alt=""/>
                <span className="title">Veg Supreme Burger</span><br/>
                <span className="rate"><b>4.5</b></span>
                <span className="reachingTime"><b>19 MINS</b></span><br/>
                <span className="cuisine">Italian, Chinese, Punjabi..</span>
            </div>
        </div>
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>)