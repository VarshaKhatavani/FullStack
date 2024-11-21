import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import Shimmer from "./Shimmer";
import RestaurantCard from "./restaurant/RestaurantCard";
import useOnlineStatus from "../utils/hooks/useOnlineStatus";
import { useRestaurantContext } from "../utils/context/RestaurantContext";
import { CDN_URL } from "../utils/constants";

const Content = () => {
  const { listOfRestaurants, filteredRestaurant, fetchData, itemCards } =
    useRestaurantContext();
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const onlineStatus = useOnlineStatus();
  console.log(itemCards);
  let foodCardHeader = itemCards?.header?.title;
  let foodcards = itemCards?.gridElements?.infoWithStyle?.info;

  let resList = listOfRestaurants?.gridElements?.infoWithStyle?.restaurants;
  let restaurantTitle = listOfRestaurants?.header?.title;
  let filterRestaurants =
    filteredRestaurant?.gridElements?.infoWithStyle?.restaurants;
  console.log(restaurantTitle);

  if (!onlineStatus) {
    return (
      <div className="bg-white w-full shadow-lg p-8 mt-[16px] rounded-lg h-5/6 mb-4 ">
        <h1 className="justify-center m-auto flex">
          Looks like you're offline, please check your internet connection!
        </h1>
      </div>
    );
  }

  //conditional rendering
  // if(listOfRestaurants.length===0){
  //     return <Shimmer/>
  // }

  const scrollContainerRef = useRef(null); // Reference to the scrollable container
  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = 300; // Adjust scroll amount as needed

      if (direction === "left") {
        container.scrollLeft -= scrollAmount;
      } else if (direction === "right") {
        container.scrollLeft += scrollAmount;
      }
    }
  };

  return resList != undefined && resList.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      {/* Search Component */}
      {itemCards && (
        <div className="p-14 py-4 overflow-hidden w-full">
          <div className="titleDiv">
            <h2 className="title pl-2 font-bold text-2xl">{foodCardHeader}</h2>
          </div>
          <div className="px-6 py-3 relative w-full  border-b-2">
            {/* Scrollable container */}
            <div
              className="flex overflow-x-scroll scrollbar-hide scroll-smooth snap-x overflow-y-hidden snap-mandatory gap-6 relative "
              ref={scrollContainerRef}
            >
              {foodcards != undefined &&
                foodcards.map((curated) => (
                  <div key={curated.id}>
                    <div className="hover:scale-105 transition-all duration-300 ease-in-out transform">
                      <a aria-label="description of food type">
                        <div className="flex items-center justify-center w-40 h-40 ">
                          <img
                            src={CDN_URL + curated.imageId}
                            alt="description of food type"
                            className=" w-40 h-40"
                          />
                        </div>
                      </a>
                    </div>
                  </div>
                ))}
            </div>
            {/* Scroll Arrows */}
            <div
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer text-white bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-80"
              onClick={() => scroll("left")}
            >
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </div>
            <div
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer text-white bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-80"
              onClick={() => scroll("right")}
            >
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </div>
        </div>
      )}
      {filterRestaurants != undefined && (
        <h1 className="font-bold text-2xl px-12 p-2">{restaurantTitle}</h1>
      )}

      <div className="res-container flex justify-start flex-wrap">
        {filterRestaurants != undefined &&
          filterRestaurants.map((restaurant) => (
            // console.log(restaurant)
            <Link
              key={restaurant.info.id}
              to={`/restaurants/${restaurant.info.id}`}
            >
              <RestaurantCard key={restaurant.info.id} resData={restaurant} />
            </Link>
          ))}
      </div>
    </>
  );
};
export default Content;
