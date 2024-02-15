import { useEffect, useState } from "react";
import { SWIGGY_URL } from "../utills/constants";

const useRestaurantGet = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const setRestaurants = (restaurants) => {
    setListOfRestaurants(restaurants);
  };

  const setRestaurantsFiltered = (restaurantsFiltered) => {
    setFilteredRestaurants(restaurantsFiltered);
  };

  const fetchData = async () => {
    try {
      const data = await fetch(SWIGGY_URL);
      const dataJSON = await data.json();
      //console.log("dataJSON", dataJSON);

      setRestaurants(
        dataJSON?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );

      setRestaurantsFiltered(
        dataJSON?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (err) {
      console.error("err", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return [listOfRestaurants, filteredRestaurants, setRestaurantsFiltered];
};

export default useRestaurantGet;
