const Reset = ({ children, resetSearchOnSelect, ...props }) => {
  return (
    <button {...props} onClick={resetSearchOnSelect}>
      {children}
    </button>
  );
};

export default Reset;
