import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import { SWIGGY_URL } from "../utills/constants";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
<<<<<<< HEAD
    const data = await fetch(SWIGGY_URL);
=======
    const data = await fetch(SWIGGY_URL, {
      header: {
        "Access-Control-Allow-Origin": "*",
      },
    });
>>>>>>> eee4cdd9cdd2f6b1d74676dc0f4d1b8387c30103
    const dataJSON = await data.json();
    console.log("dataJSON", dataJSON);
    // we have to render our page with the new data
    setListOfRestaurants(
      dataJSON?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  console.log("Body called");

  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            setListOfRestaurants(
              listOfRestaurants.filter((res) => res.info?.avgRating > 4)
            );
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((resObj) => (
          <RestaurantCard resData={resObj} />
        ))}
      </div>
    </div>
  );
};

export default Body;
