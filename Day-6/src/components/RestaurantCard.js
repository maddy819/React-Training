<<<<<<< HEAD
=======
import React from "react";
>>>>>>> eee4cdd9cdd2f6b1d74676dc0f4d1b8387c30103
import { CDN_URL } from "../utills/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, cloudinaryImageId, costForTwo, sla, avgRating } =
    resData?.info;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={`${CDN_URL}/${cloudinaryImageId}`}
        alt="res-logo"
      />
      <h3>{name}</h3>
      <h4>{cuisines?.join(",")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla?.deliveryTime} mins</h4>
    </div>
  );
};

<<<<<<< HEAD
export default RestaurantCard;
=======
export default RestaurantCard;
>>>>>>> eee4cdd9cdd2f6b1d74676dc0f4d1b8387c30103
