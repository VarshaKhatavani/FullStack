import { useEffect, useState } from "react";
import {resList} from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";

const Content = () =>{

    let [listOfRestaurants, setListOfRestaurants] = useState([]);
    console.log(listOfRestaurants);

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async() => {
        try{
        const data =  await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=20.9375588&lng=72.9364598&page_type=DESKTOP_WEB_LISTING");
        if(!data.ok){
            throw new Error("Network response was not ok");
        }
        const json = await data.json();
        console.log(json);
        console.log(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setListOfRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
        catch(error){
            console.error("An error occurred while fetching data:",error);
        }
    }

    return ( 
        <>           
            <div className="filter">
                <button onClick={()=>{ 
                    const filteredlist = listOfRestaurants.filter(
                        (res)=>res.info.avgRating > 4
                    ); 
                    console.log(filteredlist);
                    setListOfRestaurants(filteredlist);
                    
                }} className="filter-btn">Top Rated Restaurants</button>
            </div>        
            <div className="res-container">{
                listOfRestaurants.map((restaurant)=>(
                        // console.log(restaurant)
                     <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                ))
            }               
            </div>
        </>
    )
}

export default Content;