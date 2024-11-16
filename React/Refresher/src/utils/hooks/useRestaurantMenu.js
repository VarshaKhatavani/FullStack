import { useEffect, useState } from "react";
import { MENU_URL } from "../constants";
import { useRestaurantContext } from "../../utils/context/RestaurantContext.jsx";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  const { location } = useRestaurantContext();
  console.log(location);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      MENU_URL(resId, location?.latitude, location?.longitude)
    );
    const json = await data.json();
    console.log(json);
    setResInfo(json?.data?.cards);
  };
  return resInfo;
};

export default useRestaurantMenu;
