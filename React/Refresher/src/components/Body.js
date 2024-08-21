import { useEffect, useState } from "react";
// import {resList} from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useRestaurantContext } from "./RestaurantContext";

const Content = () => {
  const { listOfRestaurants, filteredRestaurant, fetchData } =
    useRestaurantContext();

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const fetchLocaleInfo = async () => {
    try {
      const response = await fetch(
        `https://api.opencagedata.com/geocode/v1/json?q=${location.latitude}+${location.longitude}&key=afc9ae1d64c34ebabace1ae90062086a`
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      const cityName = result?.results[0]?.components?.city;
      const state = result?.results[0]?.components?.state;
      const country = result?.results[0]?.components?.country;
      console.log("place...", cityName);
      const locationInfo = [cityName, state, country];
      console.log(locationInfo);
      setLocale(locationInfo);
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
      {/* Search Component */}
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
