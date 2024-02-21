import { createContext, useRef } from "react";

import useRestaurantGet from "../hooks/useRestaurantGet";

export const SearchContext = createContext({
  SearchText: "",
  RestaurantsList: [],
  RestaurantsFiltered: [],
  RestaurantSearch: () => {},
  SearchReset: () => {},
  RestaurantFilter: () => {},
});

export default SearchContextProvider = ({ children }) => {
  const textSearch = useRef();
  const [listOfRestaurants, filteredRestaurants, setRestaurantsFiltered] =
    useRestaurantGet() || [];

  const SearchRestaurant = (filterType) => {
    if (filterType === "Search") {
      setRestaurantsFiltered(
        listOfRestaurants.filter((res) =>
          res.info?.name
            ?.toLowerCase()
            .includes(textSearch.current.value.toLowerCase())
        )
      );
    }

    if (filterType === "Filter") {
      setRestaurantsFiltered(
        listOfRestaurants.filter((res) => res.info?.avgRating > 4.4)
      );
    }
  };

  const ResetSearch = () => {
    textSearch.current.value = "";
    setRestaurantsFiltered(listOfRestaurants);
  };

  SearchContextVal = {
    SearchText: textSearch,
    RestaurantsList: listOfRestaurants,
    RestaurantsFiltered: filteredRestaurants,
    RestaurantSearch: SearchRestaurant,
    SearchReset: ResetSearch,
    RestaurantFilter: SearchRestaurant,
  };

  return (
    <SearchContext.Provider value={SearchContextVal}>
      {children}
    </SearchContext.Provider>
  );
};
