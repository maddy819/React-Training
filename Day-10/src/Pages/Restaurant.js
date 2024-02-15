import { useParams } from "react-router-dom";
import Shimmer from "../components/Shimmer";
import useRestaurantMenu from "../hooks/UseRestaurantMenu";

const Restaurant = (props) => {
  const { resId } = useParams();
  const restaurantInfo = useRestaurantMenu(resId);

  const { name, areaName, cuisines, sla, avgRating } =
    restaurantInfo?.cards[0]?.card?.card?.info || {};

  const itemsCards =
    restaurantInfo?.cards[2]?.groupedCard.cardGroupMap?.REGULAR?.cards[3]?.card
      ?.card?.itemCards;

  if (restaurantInfo === null) {
    return <Shimmer />;
  }

  return (
    <div className="bg-white" key={props.key}>
      <div className="max-w-screen-xl mx-auto p-4 sm:p-4 md:p-4">
        <div className="text-4xl font-extrabold dark:text-white mb-5">
          <h1>{name}</h1>
        </div>

        <div className=" text-justify h-60">
          <p>{areaName}</p>
          <p>{cuisines}</p>
        </div>
      </div>

      <p>{`${sla?.deliveryTime}mins ${avgRating}stars`}</p>
      <h1>Menu</h1>
      <ul>
        {itemsCards?.map((itemCard) => (
          <li key={itemCard?.card?.info?.id}>{itemCard?.card?.info?.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Restaurant;
