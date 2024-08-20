import React, { useState } from "react";
import { useRestaurantContext } from "./RestaurantContext";
import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CDN_URL } from "../utils/constants";

const Search = () => {
  const {
    listOfRestaurants,
    setFilteredRestaurant,
    filteredRestaurant,
    fetchData,
  } = useRestaurantContext();

  console.log("I am search component");
  console.log(listOfRestaurants);
  const [searchText, setsearchText] = useState("");
  const [showNoResult, setShowNoResult] = useState(false);
  const [flag, setFlag] = useState(false);

  const handleSearch = () => {
    console.log(searchText);
    const filterRestaurant = listOfRestaurants.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurant(filterRestaurant);
    // Show no result message if no restaurants match the search
    setShowNoResult(filterRestaurant.length === 0);
    setFlag(true);
  };

  function searchItemList(restaurant) {
    console.log(restaurant);
    return (
      <div
        key={restaurant.info.id}
        className="bg-white flex w-full mt-4 shadow-md p-4 mb-4 rounded-lg "
      >
        <div className="w-2/12 relative">
          <img
            src={CDN_URL + restaurant?.info?.cloudinaryImageId}
            className="w-32 rounded-lg"
            alt={restaurant?.info?.name}
          />
        </div>
        <div className="p-2 w-9/12  justify-between items-center">
          <div>
            <div className="font-bold">{restaurant?.info?.name}</div>
            <div className="text-sm text-orange-400 font-semibold">
              {" "}
              {restaurant?.info?.cuisines.join(", ")}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="container p-1">
        {/* <div className="filter flex px-4 py-4 ">
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
        </div> */}

        {/* Search Input */}
        <div className="search-box p-4 ml-8 flex justify-center mx-auto">
          <input
            type="text"
            className="search-input p-2 border w-1/2 border-solid border-slate-400 rounded-md"
            placeholder="Search for restaurants and food"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
              setShowNoResult(false); // Hide no result message while typing
            }}
          ></input>
          &nbsp;&nbsp;
          <button
            className="search-btn ml-4 p-2 w-24 rounded-lg font-semibold bg-orange-50"
            onClick={() => {
              handleSearch();
            }}
          >
            Search
          </button>
        </div>
        {/* filter result */}
        {showNoResult ? (
          <div className="res-container px-72 mt-10 mb-40 justify-start flex-wrap">
            {" "}
            No match found for "
            <span className="font-semibold">{searchText}</span>"
          </div>
        ) : (
          <div className="res-container px-40 mb-28 justify-start flex-wrap">
            {flag ? (
              filteredRestaurant != undefined &&
              filteredRestaurant.length > 0 &&
              filteredRestaurant.map((restaurant) => (
                <Link
                  key={restaurant.info.id}
                  to={`/restaurants/${restaurant?.info?.id}`}
                >
                  {searchItemList(restaurant)}
                </Link>
              ))
            ) : (
              <div>Recent List</div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Search;
