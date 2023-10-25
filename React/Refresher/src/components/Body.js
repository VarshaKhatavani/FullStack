import { useState } from "react";
import {resList} from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";

const Content = () =>{

    let [listOfRestaurants, setListOfRestaurants] = useState(resList);
    console.log(listOfRestaurants);

    return ( 
        <>           
            <div className="filter">
                <button onClick={()=>{ 
                    const filteredlist = listOfRestaurants.filter(
                        (res)=>res.data.avgRating > 4
                    ); 
                    console.log(filteredlist);
                    setListOfRestaurants(filteredlist);
                    
                }} className="filter-btn">Top Rated Restaurants</button>
            </div>        
            <div className="res-container">{
                listOfRestaurants.map((restaurant)=>(
                    <RestaurantCard key={restaurant.data.id} resData={restaurant} />
                ))
            }               
            </div>
        </>
    )
}

export default Content;