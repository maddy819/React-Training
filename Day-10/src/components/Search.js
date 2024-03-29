const Search = ({ children, searchOnSelect, inputChange, searchText }) => {
  return (
    <div className="m-4">
      <input
        type="text"
        className="px-1 py-2 me-2 border border-gray-300 rounded-lg"
        value={searchText}
        onChange={inputChange}
      />
      <button
        className="text-gray-900 bg-white border border-[#8EBE43] focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700relative inline-flex items-center justify-center p-0.5 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-[#8EBE43] to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800"
        onClick={searchOnSelect}
      >
        {children}
      </button>
    </div>
  );
};

export default Search;
