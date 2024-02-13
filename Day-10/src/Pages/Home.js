import { useState } from "react";
import useRestaurantGet from "../hooks/useRestaurantGet";
import Shimmer from "../components/Shimmer";
import Restaurants from "../components/Restaurants";
import SearchAndFilter from "../components/SearchAndFilter";

const Home = () => {
  const [searchText, setSearchText] = useState("");
  const [listOfRestaurants, filteredRestaurants, setRestaurantsFiltered] =
    useRestaurantGet();

  const setText = (e) => {
    setSearchText(e?.target?.value);
  };

  const SearchRestaurant = (filterType) => {
    if (filterType === "Search") {
      setRestaurantsFiltered(
        listOfRestaurants.filter((res) =>
          res.info?.name?.toLowerCase().includes(searchText.toLowerCase())
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
    setSearchText("");
    setRestaurantsFiltered(listOfRestaurants);
  };

  return (
    <>
      {listOfRestaurants?.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="bg-white">
          <SearchAndFilter
            inputChange={(e) => setText(e)}
            searchOnSelect={() => SearchRestaurant("Search")}
            resetSearchOnSelect={() => ResetSearch()}
            filterOnSelect={() => SearchRestaurant("Filter")}
            searchTextVal={searchText}
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
