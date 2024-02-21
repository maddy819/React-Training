import { useContext } from "react";

import { SearchContext } from "../context/SearchContext";
import useOnlineStatus from "../hooks/useOnlineStatus";
import Shimmer from "../components/Shimmer";
import Restaurants from "../components/Restaurants";
import SearchAndFilter from "../components/SearchAndFilter";

const Home = () => {
  const { RestaurantsList } = useContext(SearchContext);
  const isOnline = useOnlineStatus();

  console.log("Home Executed");

  if (isOnline === false)
    return (
      <h1>Looks like you are offline, please check your internet connection</h1>
    );

  return (
    <>
      {RestaurantsList?.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="bg-white">
          <SearchAndFilter></SearchAndFilter>

          <Restaurants>Top Restaurants</Restaurants>
        </div>
      )}
    </>
  );
};

export default Home;
