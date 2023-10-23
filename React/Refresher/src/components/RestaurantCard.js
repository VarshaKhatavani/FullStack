import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) =>{

    const {resData} = props ;

    //way to access properties or methods of an object without triggering an error if the object is null or undefined.
    const { cloudinaryImageId, name, avgRating, deliveryTime, cuisines  } = resData?.data

    return <div className="res-content">
            <div className="foodCard">
                {/* https://source.unsplash.com/1600x1000/?food */}
                {/* <img className="card-img" src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${cloudinaryImageId}`} alt=""/> */}        
                <img className="card-img" src={CDN_URL + cloudinaryImageId} alt=""/>
                <span className="title">{name}</span><br/>
                <span className="rate"><b>{avgRating}</b></span>&nbsp;&nbsp;&nbsp;
                <span className="reachingTime"><b>{deliveryTime} MINS</b></span><br/>
                <span className="cuisine">{cuisines.join(", ")}</span>
            </div>
        </div>
}

export default RestaurantCard;