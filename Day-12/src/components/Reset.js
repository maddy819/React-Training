import { memo, useContext } from "react";
import { SearchContext } from "../context/SearchContext";

const Reset = ({ children, ...props }) => {
  const { SearchReset } = useContext(SearchContext);

  return (
    <button {...props} onClick={() => SearchReset()}>
      {children}
    </button>
  );
};

export default memo(Reset);
