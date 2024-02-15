import { useRef } from "react";
import useRestaurantGet from "../hooks/useRestaurantGet";
import useOnlineStatus from "../hooks/useOnlineStatus";

import Shimmer from "../components/Shimmer";
import Restaurants from "../components/Restaurants";
import SearchAndFilter from "../components/SearchAndFilter";

const Home = () => {
  const textSearch = useRef();
  const isOnline = useOnlineStatus();
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

  if (isOnline === false)
    return (
      <h1>Looks like you are offline, please check your internet connection</h1>
    );

  return (
    <>
      {listOfRestaurants?.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="bg-white">
          <SearchAndFilter
            setRef={textSearch}
            searchOnSelect={() => SearchRestaurant("Search")}
            resetSearchOnSelect={() => ResetSearch()}
            filterOnSelect={() => SearchRestaurant("Filter")}
          ></SearchAndFilter>

          <Restaurants filteredRestaurants={filteredRestaurants}>
            Top Restaurants
          </Restaurants>
        </div>
      )}
    </>
  );
};

export default Home;
