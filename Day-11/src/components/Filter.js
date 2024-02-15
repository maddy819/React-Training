const Filter = ({ children, filterOnSelect, ...props }) => {
  return (
    <button {...props} onClick={filterOnSelect}>
      {children}
    </button>
  );
};

export default Filter;
