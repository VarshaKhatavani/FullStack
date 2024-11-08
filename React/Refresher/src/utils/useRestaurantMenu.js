import { useEffect, useState } from "react";
import { MENU_URL } from "../utils/constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_URL + resId);
    // console.log(MENU_URL + resId);
    const json = await data.json();
    console.log(json);
    setResInfo(json?.data?.cards);
  };
  return resInfo;
};

export default useRestaurantMenu;
