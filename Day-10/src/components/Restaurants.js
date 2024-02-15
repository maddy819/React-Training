import { Link } from "react-router-dom";
import RestaurantCard from "../components/RestaurantCard";

const Restaurants = ({ children, filteredRestaurants }) => {
  return (
    <div className="max-w-screen-xl mx-auto p-4 sm:p-4 md:p-4">
      <div className="text-4xl font-extrabold dark:text-white mb-5">
        <h1>{children}</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-5">
        {filteredRestaurants &&
          filteredRestaurants.map((resObj) => (
            // <Link
            //   to={`/restaurants/${resObj?.info?.id}`}
            //   className="restaurant-link"
            // >
            <RestaurantCard
              className="rounded-lg overflow-hidden shadow-md shadow-[#8EBE43] border-4 border-[#8EBE43] hover:border-4 hover:border-[#8EBE43] hover:shadow-2xl hover:shadow-[#8EBE43]"
              resData={resObj}
              key={resObj?.info?.id}
            />
            // </Link>
          ))}
      </div>
    </div>
  );
};

export default Restaurants;
