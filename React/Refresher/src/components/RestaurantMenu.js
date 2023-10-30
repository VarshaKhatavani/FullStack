import { useEffect } from 'react';
import myImage from '../../Swiggy-2.png';

const RestaurantMenu = () =>{

    useEffect(()=>{
        fetchMenu();
    },[])

    const fetchMenu = async() =>{
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5204303&lng=73.8567437&restaurantId=378117");
        const json = await data.json();
        console.log(json);
    }

    return(
        <div className="res-detail-info">
            <div className="res-info"> 
                <div className="detail-info centered-border">
                    <h3 className="res-title">Restaurant Name</h3>
                    <span className="res-subtitle">Indian</span><br/>
                    <span className="res-subtitle">Swargate, 2.4 km</span>  <br/><br/>              
                    <span className="res-subtitle">
                        2 kms | ₹38 Delivery fee will apply</span>
                </div>
                <div className="detail-rating">
                    <span className="rate">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 20 20">
                        <path d="M10 1l2.4 6.6h7.6l-6 4.8 2.4 6.6-6-4.8-6 4.8 2.4-6.6-6-4.8h7.6z"/>
                    </svg>&nbsp; 4.3 </span>
                    <span className="rate-info">10+ ratings</span>         
                </div>              
            </div>            
            <div className="delivery-info">
                <div className="distance"><span>30 MINS</span> &nbsp;&nbsp; <span>400 for two</span></div>
                <div className="latest-offers">
                    <div className="offers">
                        <span className="beverages">LUNCH</span>
                        <div className="offer-container">
                            <span className="offer">FLAT Rs.125 OFF</span><br/>
                            <span className="coupon-offer">USE LUNCHBINGE | ABOVE 249 Rs.</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="menu-list">
                <div className="vegan-header">                
                    pure veg
                </div>
                <div className="menu">
                    <div className="left-menu">
                        <span className="vegan-icon">

                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                            <rect width="16" height="16" fill="none" stroke="green" stroke-width="2" />
                            <circle cx="8" cy="8" r="4" fill="green" />
                        </svg>

                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                            <rect width="16" height="16" fill="none" stroke="red" stroke-width="2" />
                            <circle cx="8" cy="8" r="4" fill="red" />
                        </svg>  
                            
                        </span>&nbsp; &nbsp;
                        <span className="bestSeller">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 20 20">
                                <path d="M10 1l2.4 6.6h7.6l-6 4.8 2.4 6.6-6-4.8-6 4.8 2.4-6.6-6-4.8h7.6z" style={{  fill: "orange"}} ></path>
                            </svg> Bestseller</span><br/>
                        <span className="menu-title">Amul Butter Pav Bhaji (2 Pcs)</span><br/>
                        <span className="price">190</span><br/>
                        <span className="menu-item-desc">Serves 1 | Butter-laden pavs accompanied by a delicious and healthy gravy of mashed vegetables, topped with dollops of butter.</span>

                    </div>
                    <div className="right-menu">            
                        <img className='menu-image' src={myImage} alt="" width={60} height={60}/> 
                        <div className="counter">
                            <button className='qty-btn'>&nbsp;&nbsp;&nbsp;&nbsp; ADD &nbsp;&nbsp;&nbsp;</button>
                            {/* <span>
                                <button className="qty-btn">-</button> &nbsp; 1 &nbsp; <button className="qty-btn">+</button>
                            </span> */}
                            </div>                        
                    </div>
                </div>
            </div>
        </div>
    )
}
export default RestaurantMenu; 