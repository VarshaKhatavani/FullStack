import React, { useCallback, useEffect, useRef, useState } from "react";
import { useRestaurantContext } from "../utils/RestaurantContext";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CDN_URL } from "../utils/constants";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Search = () => {
  const { listOfRestaurants, setFilteredRestaurant, filteredRestaurant } =
    useRestaurantContext();

  console.log("I am search component");
  //console.log(listOfRestaurants);
  const [searchText, setsearchText] = useState("");
  const [showNoResult, setShowNoResult] = useState(false);
  const [flag, setFlag] = useState(false);
  const [recentList, setRecentList] = useState([]);

  const searchTextRef = useRef(searchText);

  // Debounce function using useCallback to memoize it
  const debounce = (func, delay) => {
    let timer;
    return (...args) => {
      console.log("Debounce called:", args);
      clearTimeout(timer);
      timer = setTimeout(() => {
        console.log("Executing debounced function");
        func(...args);
      }, delay);
    };
  };

  const handleSearch = useCallback(() => {
    console.log("handleSerach..ref..", searchTextRef.current);
    //console.log("handleSerach....", searchText);
    const filterRestaurant = listOfRestaurants.filter((res) =>
      res.info.name.toLowerCase().includes(searchTextRef.current.toLowerCase())
    );
    setFilteredRestaurant(filterRestaurant);
    // Show no result message if no restaurants match the search
    setShowNoResult(filterRestaurant.length === 0);
    setFlag(true);
  }, [searchText, listOfRestaurants]);

  useEffect(() => {
    const storedRecentList = localStorage.getItem("searchlist");
    console.log(storedRecentList);

    if (storedRecentList) {
      const parseData = JSON.parse(storedRecentList);
      const recentListFromStorage =
        parseData.searchedRestaurantList.limitedList;
      setRecentList(recentListFromStorage);
    }
  }, []);

  const updateRecentList = useCallback(
    (search) => {
      // console.log("updateRecentList called......", search);

      if (search.trim()) {
        const newList =
          recentList.length > 0 ? [...recentList, search] : [search];
        // recent 5 searches
        const limitedList = newList.slice(-5);
        console.log("recentList....", newList);
        setRecentList(limitedList);

        const expiryTimeStamp = Date.now() + 3600 * 1000; // 1 hour
        const searchedRestaurantList = {
          limitedList,
          expiry: expiryTimeStamp,
        };
        localStorage.setItem(
          "searchlist",
          JSON.stringify({ searchedRestaurantList })
        );
      }
    },
    [recentList]
  );

  // debouncing search func
  const debouncedSearch = useCallback(
    debounce(() => {
      handleSearch();
      // Only call updateRecentList with the final search term
      updateRecentList(searchTextRef.current);
    }, 1500),
    [searchText]
  );

  const handleInputChange = (e) => {
    let value = e.target.value;
    //console.log("value...", value);
    searchTextRef.current = value;
    setsearchText(value);
    if (value.trim() === "") {
      setFilteredRestaurant([]);
      setShowNoResult(false); // Hide no result msg
      setFlag(false);
    } else {
      setShowNoResult(false); // Hide no result message while typing
      setFlag(false); // Reset flag for recent list view
      debouncedSearch(); // Call debounced search function
    }
  };

  // result div format
  function searchItemList(restaurant) {
    //console.log(restaurant);
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
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="container p-1">
          {/* Search Input */}
          <div className="search-box p-4 ml-8 flex justify-center mx-auto">
            <div className="flex items-center border border-solid border-slate-400 rounded-md w-1/2">
              {" "}
              {/* Flex container for input and icon */}
              {/* Search Icon */}
              <FontAwesomeIcon icon={faSearch} className="ml-3 text-gray-500" />
              {/* Search Input */}
              <input
                type="text"
                className="search-input p-2 w-full rounded-md outline-none border-0"
                placeholder="Search for restaurants.."
                value={searchText}
                onChange={handleInputChange}
              />
            </div>
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
                <div className="text-gray-700">
                  <strong>Recent Searches</strong>
                  {recentList.length > 0 ? (
                    recentList.map((text, index) => {
                      return (
                        <div
                          className="mt-2 p-2 cursor-pointer  border-b-[1px] "
                          key={index}
                          onClick={() => {
                            setsearchText(text);
                            searchTextRef.current = text;
                            handleSearch(text);
                          }}
                        >
                          <FontAwesomeIcon icon={faSearch} />
                          <span className="ml-4">{text}</span>
                        </div>
                      );
                    })
                  ) : (
                    <div className="py-6">No Search Results Found..</div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </form>
    </>
  );
};

export default Search;
