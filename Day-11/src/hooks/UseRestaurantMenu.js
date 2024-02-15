import { useEffect, useState } from "react";
import { SWIGGY_MENU_URL } from "../utills/constants";

const useRestaurantMenu = (resId) => {
  const [restaurantInfo, setRestaurantInfo] = useState(null);

  const fetchRestaurant = async () => {
    const data = await fetch(`${SWIGGY_MENU_URL}/${resId}`);
    const jsonData = await data.json();
    setRestaurantInfo(jsonData?.data);
  };

  useEffect(() => {
    fetchRestaurant();
  }, []);
  // fetch data
  return restaurantInfo;
};

export default useRestaurantMenu;
