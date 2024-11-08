import { useState, useMemo } from "react";
import { debounce } from "lodash"; // Import lodash debounce
import { CiSearch } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import { BookData } from "../assets/data/BookData";
import { GetImages } from "../helpreFunction/GetImages";

export function SearchPopup({ onClose }) {
  const bookData = BookData();
  const [searchTerm, setSearchTerm] = useState("");

  // Use debounce to delay the filter function
  const debouncedSetSearchTerm = useMemo(() => debounce(setSearchTerm, 300), []);

  const handleSearchChange = (e) => {
    debouncedSetSearchTerm(e.target.value);
  };

  // Filter books based on search term
  const filteredBooks = bookData.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className=" hidden sm:block w-full max-w-md md:w-[600px] bg-gray-800 shadow-lg rounded-lg mx-auto relative p-4">
      {/* Search Bar */}
      <div className="">
        <div className="flex items-center mb-4 mt-8 ml-2 sm:ml-4">
          <span className="text-gray-300">
            <CiSearch size={24} />
          </span>
          <input
            type="text"
            placeholder="Type your favorite book name here ..."
            className="ml-2 p-2 w-full sm:w-80 border rounded-lg focus:outline-none focus:placeholder-transparent text-sm sm:text-base"
            onChange={handleSearchChange}
          />
        </div>
        <div onClick={onClose} className="absolute top-2 right-2">
          <RxCross2 className="text-2xl text-gray-400 cursor-pointer" />
        </div>
      </div>

      {/* Display Filtered Books */}
      {filteredBooks.length > 0 ? (
        <div className="mt-4 sm:mt-8 space-y-4">
          {filteredBooks.map((item) => (
            <div
              key={item.id}
              className="flex items-center space-x-4 hover:bg-divineGreen hover:text-gray-800 p-3 sm:p-4 transition-colors duration-200"
            >
              <img
                src={GetImages(`../assets/images/${item.image}`)}
                alt={item.name}
                className="w-16 h-16 sm:w-20 sm:h-20 rounded"
              />
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-200">{item.name}</h3>
                <p className="text-gray-400 text-xs sm:text-sm mt-2 sm:mt-4">Author: {item.author}</p>
                <p className="text-gray-200 text-sm">Price: ${item.price}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500 py-8 font-bold text-xl sm:text-3xl">No Data Found</div>
      )}
    </div>
  );
}

export default SearchPopup;
