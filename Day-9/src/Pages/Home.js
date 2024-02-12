import { useState, useEffect } from "react";
import RestaurantCard from "../components/RestaurantCard";
import { SWIGGY_URL } from "../utills/constants";
import Shimmer from "../components/Shimmer";
import { Link } from "react-router-dom";

const Home = () => {
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
        <div className="bg-white">
          <div className="filter grid grid-cols-2 md:grid-cols-2 sm:grid-cols-2 gap-5">
            <div className="m-4">
              <input
                type="text"
                className="px-1 py-2 me-2 border border-gray-300 rounded-lg"
                value={searchText}
                // e is a callback method
                onChange={(e) => setSearchText(e?.target?.value)}
              />
              <button
                className="text-gray-900 bg-white border border-[#8EBE43] focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700relative inline-flex items-center justify-center p-0.5 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-[#8EBE43] to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800"
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
            </div>
            <div className="flex md:flex md:flex-grow flex-row justify-end space-x-1 m-4">
              <button
                className="text-gray-900 bg-white border border-[#8EBE43] focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700relative inline-flex items-center justify-center p-0.5 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-[#8EBE43] to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800"
                onClick={() => {
                  // filter the cards
                  setSearchText("");
                  setFilteredRestaurants(listOfRestaurants);
                }}
              >
                Reset
              </button>
              <button
                className="text-gray-900 bg-white border border-[#8EBE43] focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700relative inline-flex items-center justify-center p-0.5 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-[#8EBE43] to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800"
                onClick={() => {
                  setFilteredRestaurants(
                    listOfRestaurants.filter((res) => res.info?.avgRating > 4.4)
                  );
                }}
              >
                Top Rated Restaurants
              </button>
            </div>
          </div>

          <div className="max-w-screen-xl mx-auto p-4 sm:p-4 md:p-4">
            <div className="text-4xl font-extrabold dark:text-white mb-5">
              <h1>Top Restaurants</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-5">
              {filteredRestaurants.map((resObj) => (
                <Link
                  to={`/restaurants/${resObj?.info?.id}`}
                  key={resObj?.info?.id}
                  className="restaurant-link"
                >
                  <RestaurantCard resData={resObj} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
