import { useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { HiOutlineFilter } from "react-icons/hi";

function RightSideBar({ onFilterChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState(null);

  const handleFilterClick = (filterType) => {
    setActiveFilter(filterType);
    onFilterChange(filterType);
  };

  return (
    <div className="fixed right-0 top-16 h-screen p-4 bg-white dark:bg-gray-800 shadow-lg z-40 w-0 lg:w-1/5">
      {/* Toggle button for small screens */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden p-2 bg-gray-800 text-divineGreen rounded focus:outline-none fixed right-2"
      >
        <HiOutlineFilter className="text-2xl" />
      </button>

      {/* Sidebar content */}
      <div className={`${isOpen ? "block" : "hidden"} lg:block mt-4`}>
        <h3 className="text-[18px] mb-4 text-gray-800 dark:text-white">Filter On Page</h3>
        <div>
          {/* Filter Buttons */}
          <div
            className={`flex items-center mt-4 cursor-pointer p-3 rounded transition ${activeFilter === "name" ? "bg-divineGreen text-gray-800 font-bold" : "hover:bg-divineGreen"}`}
            onClick={() => handleFilterClick("name")}
          >
            <FaChevronRight className={`text-gray-800 dark:text-white ${activeFilter === "name" ? "text-gray-800" : ""}`} />
            <button className="ml-2 text-[16px] text-gray-800 dark:text-white">By Name</button>
          </div>

          <div
            className={`flex items-center mt-4 cursor-pointer p-3 rounded transition ${activeFilter === "rating" ? "bg-divineGreen text-gray-800 font-bold" : "hover:bg-divineGreen"}`}
            onClick={() => handleFilterClick("rating")}
          >
            <FaChevronRight className={`text-gray-800 dark:text-white ${activeFilter === "rating" ? "text-gray-800" : ""}`} />
            <button className="ml-2 text-[16px] text-gray-800 dark:text-white">By Rating</button>
          </div>

          <div
            className={`flex items-center mt-4 cursor-pointer p-3 rounded transition ${activeFilter === "price" ? "bg-divineGreen text-gray-800 font-bold" : "hover:bg-divineGreen"}`}
            onClick={() => handleFilterClick("price")}
          >
            <FaChevronRight className={`text-gray-800 dark:text-white ${activeFilter === "price" ? "text-gray-800" : ""}`} />
            <button className="ml-2 text-[16px] text-gray-800 dark:text-white">By Price</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightSideBar;
