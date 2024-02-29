import { useContext } from "react";

import RestaurantCard from "../components/RestaurantCard";
import WithOpenLabel from "../components/WithOpenLabel";
import { SearchContext } from "../context/SearchContext";

const Restaurants = ({ children }) => {
  const { RestaurantsFiltered } = useContext(SearchContext);
  const RestaurantCardOpen = WithOpenLabel(RestaurantCard);

  return (
    <div className="max-w-screen-xl mx-auto p-4 sm:p-4 md:p-4">
      <div className="text-4xl font-extrabold dark:text-white mb-5">
        <h1>{children}</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-5 hover:transition hover:[&>*:nth-child(even)]:duration-500 hover:[&>*:nth-child(odd)]:duration-500 hover:ease-out hover:[&>*:nth-child(even)]:rotate-3 hover:[&>*:nth-child(odd)]:-rotate-3">
        {RestaurantsFiltered &&
          RestaurantsFiltered.map((resObj) =>
            resObj?.info?.isOpen ? (
              <RestaurantCardOpen
                className="rounded-lg overflow-hidden shadow-md shadow-[#8EBE43] border-4 border-[#8EBE43] hover:border-4 hover:border-[#8EBE43] hover:shadow-2xl hover:shadow-[#8EBE43]"
                resData={resObj}
                key={resObj?.info?.id}
              />
            ) : (
              <RestaurantCard
                className="rounded-lg overflow-hidden shadow-md shadow-[#8EBE43] border-4 border-[#8EBE43] hover:border-4 hover:border-[#8EBE43] hover:shadow-2xl hover:shadow-[#8EBE43]"
                resData={resObj}
                key={resObj?.info?.id}
              />
            )
          )}
      </div>
    </div>
  );
};

export default Restaurants;
