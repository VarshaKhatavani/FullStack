import { useEffect, useState } from "react";
// import {resList} from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Content = () =>{

    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [searchText, setsearchText] = useState("");
    const [filteredRestaurant, setFilteredRestaurant]= useState([]);

    console.log(listOfRestaurants);

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async() => {
        try{
        const data = await  fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&page_type=DESKTOP_WEB_LISTING");
        if(!data.ok){
            throw new Error("Network response was not ok");
        }
        const json = await data.json();
        console.log(json);
        console.log(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setListOfRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
        catch(error){
            console.error("An error occurred while fetching data:",error);
        }
    }

    //conditional rendering
    // if(listOfRestaurants.length===0){
    //     return <Shimmer/>
    // }

    return listOfRestaurants.length===0 ?  <Shimmer/>  : ( 
        <>  
            <div className="container">
                <div className="search-box">
                    <input type="text" className="search-input" placeholder="search here.." value={searchText} onChange={(e)=>{
                        setsearchText(e.target.value); 

                        }}></input>
                    &nbsp;&nbsp;
                    <button className="search-btn" onClick={()=>{
                        console.log(searchText);
                        const filterRestaurant = listOfRestaurants.filter(
                            (res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        )
                        setFilteredRestaurant(filterRestaurant); 
                        }}>Search</button>
                </div>
                <div className="filter">
                    <button onClick={()=>{ 
                        const filteredlist = listOfRestaurants.filter(
                            (res)=>res.info.avgRating > 4
                        ); 
                        console.log(filteredlist);
                        setListOfRestaurants(filteredlist);                    
                    }} className="filter-btn">Top Rated Restaurants</button>
                </div>        
            </div>      
            <div className="res-container">{
                // console.log(filteredRestaurant)
                filteredRestaurant.map((restaurant)=>(
                        // console.log(restaurant)
                     <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                ))
            }               
            </div>
        </>
    )
}

export default Content;