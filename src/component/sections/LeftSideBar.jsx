import { useState } from "react";
import { GoSearch } from "react-icons/go";
import { FaFire } from "react-icons/fa";
import { FiFolderPlus } from "react-icons/fi";
import { MdOutlineUpcoming, MdFavoriteBorder } from "react-icons/md";
import { HiOutlineMenu } from "react-icons/hi";

function LeftSideBar({ onSearch, onFilterChange, onFavoritePopup, favoriteCount }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeButton, setActiveButton] = useState("");

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
    if (buttonName === "trending") onFilterChange(5);
    if (buttonName === "new_releases") onFilterChange("new_releases");
    if (buttonName === "coming_soon") onFilterChange("coming_soon");
    if (buttonName === "favorites") onFavoritePopup();
  };

  return (
    <div className="fixed left-0 top-16 h-screen p-4 bg-white dark:bg-gray-800 shadow-lg z-40 w-0 lg:w-1/5">
      {/* Toggle button for small screens */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden p-2 fixed  z-50 bg-white  dark:bg-gray-800 text-divineGreen rounded focus:outline-none"
      >
        <HiOutlineMenu className="text-2xl" />
      </button>

      {/* Sidebar content */}
      <div className={`${isOpen ? "block" : "hidden"} lg:block mt-4`}>
        <div onClick={onSearch} className="relative w-full flex items-center cursor-pointer">
          <span className="absolute inset-y-0 left-3 flex items-center text-gray-500">
            <GoSearch />
          </span>
          <input
            type="text"
            placeholder="Quick search..."
            className="pl-10 border text-gray-500 border-[#5EE7BA] py-2 w-full rounded-lg focus:outline-none focus:placeholder-transparent"
          />
        </div>

        {/* Sidebar Buttons */}
        <div
          className={`flex items-center mt-4 py-2 px-4 rounded cursor-pointer ${activeButton === "trending" ? "bg-divineGreen text-black" : "hover:bg-divineGreen hover:text-black"}`}
          onClick={() => handleButtonClick("trending")}
        >
          <FaFire className="ml-6 text-[18px] text-gray-800 dark:text-white" />
          <button className="ml-6 text-[18px] text-gray-800 dark:text-white">Trending</button>
        </div>

        <div
          className={`flex items-center mt-4 py-2 px-4 rounded cursor-pointer ${activeButton === "new_releases" ? "bg-divineGreen text-black" : "hover:bg-divineGreen hover:text-black"}`}
          onClick={() => handleButtonClick("new_releases")}
        >
          <FiFolderPlus className="ml-4 text-[16px] text-gray-800 dark:text-white" />
          <button className="ml-2 text-[16px] text-gray-800 dark:text-white">New Releases</button>
        </div>

        <div
          className={`flex items-center mt-4 py-2 px-4 rounded cursor-pointer ${activeButton === "coming_soon" ? "bg-divineGreen text-black" : "hover:bg-divineGreen hover:text-black"}`}
          onClick={() => handleButtonClick("coming_soon")}
        >
          <MdOutlineUpcoming className="ml-4 text-[16px] text-gray-800 dark:text-white" />
          <button className="ml-4 text-[16px] text-gray-800 dark:text-white">Coming Soon</button>
        </div>

        <div
          className={`flex items-center mt-4 py-2 px-4 rounded cursor-pointer relative ${activeButton === "favorites" ? "bg-divineGreen text-black" : "hover:bg-divineGreen hover:text-black"}`}
          onClick={() => handleButtonClick("favorites")}
        >
          <MdFavoriteBorder className="ml-6 text-2xl text-gray-800 dark:text-white" />
          <button className="ml-6 text-[16px] text-gray-800 dark:text-white">Favorites</button>
          <div className="absolute top-0 left-7 bg-gray-600 dark:bg-white rounded-full w-5 h-5 flex items-center justify-center">
            <span className="dark:text-rose-700 text-white text-xs">{favoriteCount}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSideBar;
