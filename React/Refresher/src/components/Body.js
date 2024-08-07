import { useEffect, useState } from "react";
// import {resList} from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Content = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setsearchText] = useState("");
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  console.log(listOfRestaurants);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&page_type=DESKTOP_WEB_LISTING",
        {
          headers: {
            Origin: "http://localhost:1234/", // Replace with your React app's origin
          },
        }
      );

      if (!data.ok) {
        throw new Error("Network response was not ok");
      }
      const json = await data.json();
      console.log("Hey, I looking for restaurants");
      console.log(json);
      console.log(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setListOfRestaurants(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilteredRestaurant(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (error) {
      console.error("An error occurred while fetching data:", error);
    }
  };

  const onlineStatus = useOnlineStatus();

  if (!onlineStatus) {
    return (
      <div className="container">
        <h1>
          Looks like you're offline, please check your internet connection!
        </h1>
      </div>
    );
  }

  //conditional rendering
  // if(listOfRestaurants.length===0){
  //     return <Shimmer/>
  // }

  return listOfRestaurants != undefined && listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="container p-1 flex justify-between">
        <div className="search-box p-4 ml-8">
          <input
            type="text"
            className="search-input p-2 border border-solid border-slate-400 rounded-md"
            placeholder="search here.."
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          ></input>
          &nbsp;&nbsp;
          <button
            className="search-btn ml-4 p-2 w-24 rounded-lg font-semibold bg-orange-50"
            onClick={() => {
              console.log(searchText);
              const filterRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filterRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <div className="filter flex px-4 py-4 ">
          <button
            onClick={() => {
              const filteredlist = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4.5
              );
              console.log(filteredlist);
              setListOfRestaurants(filteredlist);
            }}
            className="filter-btn px-6 py-2 mr-8 items-center font-semibold rounded-lg bg-orange-50 "
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="res-container flex justify-start flex-wrap">
        {
          // console.log(filteredRestaurant)
          filteredRestaurant != undefined &&
            filteredRestaurant.map((restaurant) => (
              // console.log(restaurant)
              <Link
                key={restaurant.info.id}
                to={`/restaurants/${restaurant.info.id}`}
              >
                <RestaurantCard key={restaurant.info.id} resData={restaurant} />
              </Link>
            ))
        }
      </div>
    </>
  );
};
export default Content;
