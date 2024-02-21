import { memo, useContext } from "react";
import { SearchContext } from "../context/SearchContext";

const Filter = ({ children, ...props }) => {
  const { RestaurantFilter } = useContext(SearchContext);

  return (
    <button {...props} onClick={() => RestaurantFilter("Filter")}>
      {children}
    </button>
  );
};

export default memo(Filter);
