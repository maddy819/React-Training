import { useNavigate } from "react-router-dom";
import { CDN_URL } from "../utills/constants";

const RestaurantCard = ({ resData, ...props }) => {
  let navigate = useNavigate();
  const { name, cuisines, cloudinaryImageId, costForTwo, sla, avgRating } =
    resData?.info || {};

  const goToRestaurant = () => {
    const resUrl = `/restaurants/${resData?.info?.id}`;
    navigate(resUrl);
  };

  return (
    <div {...props}>
      <div className="relative">
        <img
          className="h-60 w-[100%]"
          src={`${CDN_URL}/${cloudinaryImageId}`}
          alt="res-logo"
        />
      </div>
      <div className="px-4 py-4 text-wrap break-words relative bg-white">
        <div className="text-gray-600 text-justify h-52">
          <h3 className="font-bold">{name}</h3>
          <h4>{cuisines?.join(",")}</h4>
          <h4>{avgRating}</h4>
          <h4>{costForTwo}</h4>
          <h4>{sla?.deliveryTime} mins</h4>
        </div>
        <div className="text-gray-600 text-justify mt-5 absolute bottom-2 w-full pr-8">
          <button
            onClick={goToRestaurant}
            className="w-full text-gray-900 bg-white border border-[#8EBE43] focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700relative inline-flex items-center justify-center p-0.5 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-[#8EBE43] to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800"
          >
            Go To Restaurant
          </button>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
