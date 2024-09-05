import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

// create context
const RestaurantContext = createContext();

// Custom hook to use the context
export const useRestaurantContext = () => {
  return useContext(RestaurantContext);
};

// Provider Component
export const RestaurantProvider = ({ children }) => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [location, setLocation] = useState({
    latitude: 20.9467,
    longitude: 72.952,
  });
  const [locale, setLocale] = useState([]);
  const [error, setError] = useState(null);

  // Ref to track if fetch has been initiated
  // const hasFetchedData = useRef(false);

  //console.log(listOfRestaurants);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          //console.log(position);
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          setError(error.message);
        }
      );
    } else {
      setError("Geolocation is not supported by browser.");
    }
  }, []);

  // !hasFetchedData.current
  // hasFetchedData.current = true; // Prevent further fetches

  useEffect(() => {
    if (location.latitude && location.longitude) {
      // fetch restuarants list
      fetchData();

      //fetch localeinfo from latitude & longitude
      //fetchLocaleInfo();
    }
  }, [location]);

  const fetchData = useCallback(async () => {
    try {
      const data = await fetch(
        `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${location.latitude}&lng=${location.longitude}&page_type=DESKTOP_WEB_LISTING`,
        {
          headers: {
            Origin: "http://localhost:1234/", // Replace with your React app's origin
          },
        }
      );

      if (!data.ok) {
        throw new Error("Network response was not ok");
      }
      const restData = await data.json();
      //console.log("Hey, I looking for restaurants");
      //console.log(restData);
      // console.log(
      //   restData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
      //     ?.restaurants
      // );

      const restaurantList =
        restData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;

      if (restaurantList) {
        setListOfRestaurants(restaurantList);
        setFilteredRestaurant(restaurantList);
      }
    } catch (error) {
      console.error("An error occurred while fetching data:", error);
    }
  }, [location.latitude, location.longitude]);

  return (
    <>
      <RestaurantContext.Provider
        value={{
          listOfRestaurants,
          setListOfRestaurants,
          filteredRestaurant,
          setFilteredRestaurant,
          fetchData,
        }}
      >
        {children}
      </RestaurantContext.Provider>
    </>
  );
};

export default RestaurantContext;
