import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) =>{

    const {resData} = props ;

    //way to access properties or methods of an object without triggering an error if the object is null or undefined.
    const { cloudinaryImageId, name, avgRating, sla , cuisines , costForTwo, aggregatedDiscountInfoV3  } = resData?.info
   
    // access array inside object
    const {header,subHeader} = aggregatedDiscountInfoV3 || {};
    const {deliveryTime} = sla || {};

    return <div className="res-content flex m-3 cursor-default">
            <div className="foodCard w-[250px] h-68 ml-8 cursor-pointer hover:scale-90 ease-in-out duration-300">
                    <img className="h-40 bg-cover rounded-xl" src={CDN_URL + cloudinaryImageId}></img>                     
                    <div className="absolute flex -mt-10 p-2 text-white font-bold ">
                        <span className="cost"> {header} &nbsp;{subHeader}</span>   
                    </div> 
                    <div className="p-2">                    
                        <span className="title font-bold">{name}</span><br/>                        
                        <span >star {avgRating}</span>&nbsp;&nbsp;&nbsp;
                        <span className="reachingTime"><b>{deliveryTime} MINS</b></span><br/>
                        <span className="cuisine">{cuisines.join(", ")}</span>                    
                    </div>
            </div>
        </div>
}

export default RestaurantCard;