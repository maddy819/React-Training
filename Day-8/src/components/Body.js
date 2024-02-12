import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import { SWIGGY_URL } from "../utills/constants";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  const fetchData = async () => {
    try {
      const data = await fetch(SWIGGY_URL);
      const dataJSON = await data.json();
      console.log("dataJSON", dataJSON);
      // we have to render our page with the new data
      setListOfRestaurants(
        dataJSON?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );

      setFilteredRestaurants(
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

  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }
  return (
    <>
      {listOfRestaurants?.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="body">
          <div className="filter">
            <div className="search">
              <input
                type="text"
                className="search-box"
                value={searchText}
                // e is a callback method
                onChange={(e) => setSearchText(e?.target?.value)}
              />
              <button
                onClick={() => {
                  // filter the cards
                  setFilteredRestaurants(
                    listOfRestaurants.filter((res) =>
                      res.info?.name
                        ?.toLowerCase()
                        .includes(searchText.toLowerCase())
                    )
                  );
                }}
              >
                Search
              </button>
              <button
                onClick={() => {
                  // filter the cards
                  setSearchText("");
                  setFilteredRestaurants(listOfRestaurants);
                }}
              >
                Reset
              </button>
            </div>
            <button
              className="filter-btn"
              onClick={() => {
                setFilteredRestaurants(
                  listOfRestaurants.filter((res) => res.info?.avgRating > 4.4)
                );
              }}
            >
              Top Rated Restaurants
            </button>
          </div>
          <div className="res-container">
            {filteredRestaurants.map((resObj) => (
              <RestaurantCard resData={resObj} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Body;
