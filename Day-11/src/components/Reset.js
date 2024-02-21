import { memo, useContext } from "react";
import { SearchContext } from "../context/SearchContext";

const Reset = ({ children, ...props }) => {
  const { SearchReset } = useContext(SearchContext);

  console.log("Reset Executed");

  return (
    <button {...props} onClick={() => SearchReset()}>
      {children}
    </button>
  );
};

export default memo(Reset);
