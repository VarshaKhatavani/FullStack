import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Shimmer from "./Shimmer";
import RestaurantCard from "./restaurant/RestaurantCard";
import useOnlineStatus from "../utils/hooks/useOnlineStatus";
import { useRestaurantContext } from "../utils/context/RestaurantContext";

const Content = () => {
  const { listOfRestaurants, filteredRestaurant, fetchData } =
    useRestaurantContext();

  useEffect(() => {
    fetchData();
  }, [fetchData]);

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
