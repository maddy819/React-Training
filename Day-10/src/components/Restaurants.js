import { Link } from "react-router-dom";
import RestaurantCard from "../components/RestaurantCard";

const Restaurants = ({ children, filteredRestaurants }) => {
  return (
    <div className="max-w-screen-xl mx-auto p-4 sm:p-4 md:p-4">
      <div className="text-4xl font-extrabold dark:text-white mb-5">
        <h1>{children}</h1>
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
  );
};

export default Restaurants;
