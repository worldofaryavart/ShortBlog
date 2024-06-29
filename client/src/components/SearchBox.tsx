const SearchBox = () => {

  return (
    <div className="flex-1 flex justify-end items-center">
      <div className="max-w-lg w-full lg:max-w-xs">
        <form className="relative">
          <div className="absolute inset-y-0 right-1 pl-1 flex items-center pointer-events-none">
            <svg
              className="h-7 w-7 text-gray-900 "
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchBox;
