<<<<<<< HEAD
=======
import React from "react";
>>>>>>> eee4cdd9cdd2f6b1d74676dc0f4d1b8387c30103
import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { resList } from "../utills/mockData";
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            // listOfRestaurants = listOfRestaurants.filter(
            //   (res) => res.info.avgRating > 3
            // );

            // console.log("listOfRestaurants", listOfRestaurants);

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
          <RestaurantCard resData={resObj} key={resObj.info.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
