import { useEffect, useReducer } from "react";
import { SWIGGY_URL } from "../utills/constants";

const RestaurantsReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const Restaurants = action.payload;
    return Restaurants;
  }

  return state;
};

const FilteredRestaurantsReducer = (state, action) => {
  if (action.type === "ADD_FILTERED_ITEM") {
    const FilteredRestaurants = action.payload;
    return FilteredRestaurants;
  }

  return state;
};

const useRestaurantGet = () => {
  const [RestaurantsState, RestaurantsDispatch] = useReducer(
    RestaurantsReducer,
    []
  );

  const [FilteredRestaurantsState, FilteredRestaurantsDispatch] = useReducer(
    FilteredRestaurantsReducer,
    []
  );

  const setRestaurants = (restaurants) => {
    RestaurantsDispatch({
      type: "ADD_ITEM",
      payload: restaurants,
    });
  };

  const setRestaurantsFiltered = (restaurantsFiltered) => {
    FilteredRestaurantsDispatch({
      type: "ADD_FILTERED_ITEM",
      payload: restaurantsFiltered,
    });
  };

  const fetchData = async () => {
    try {
      const data = await fetch(SWIGGY_URL);
      const dataJSON = await data.json();

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

  return [RestaurantsState, FilteredRestaurantsState, setRestaurantsFiltered];
};

export default useRestaurantGet;
