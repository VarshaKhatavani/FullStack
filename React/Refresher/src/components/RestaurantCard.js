import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) =>{

    const {resData} = props ;

    //way to access properties or methods of an object without triggering an error if the object is null or undefined.
    const { cloudinaryImageId, name, avgRating, sla , cuisines , costForTwo, aggregatedDiscountInfoV3  } = resData?.info
   
    // access array inside object
    const {header,subHeader} = aggregatedDiscountInfoV3 || {};
    const {deliveryTime} = sla || {};

    return <div className="res-content">
            <div className="foodCard">
                {/* https://source.unsplash.com/1600x1000/?food */}
                {/* <img className="card-img" src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${cloudinaryImageId}`} alt=""/> */}        
                <div className="card-img" style={{backgroundImage: `url(${CDN_URL + cloudinaryImageId})`}}>
                    {/* <img className="card-img" src={CDN_URL + cloudinaryImageId} alt=""></img>  */}
                    <span className="cost"> {header} &nbsp;{subHeader}</span> 
                    {/* {costForTwo} */}
                </div> 
                <div className="card-content">
                    <span className="title">{name}</span><br/>
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 20 20">
                        <path d="M10 1l2.4 6.6h7.6l-6 4.8 2.4 6.6-6-4.8-6 4.8 2.4-6.6-6-4.8h7.6z"/>
                    </svg>&nbsp;
                    <span className="rate"><b>{avgRating}</b></span>&nbsp;&nbsp;&nbsp;
                    <span className="reachingTime"><b>{deliveryTime} MINS</b></span><br/>
                    <span className="cuisine">{cuisines.join(", ")}</span>
                </div>
            </div>
        </div>
}

export default RestaurantCard;