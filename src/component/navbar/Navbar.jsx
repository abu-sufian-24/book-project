import { IoNotifications } from "react-icons/io5";
import { BsCart3 } from "react-icons/bs";
import DarkMode from "./DarkMode";

const Navbar = ({ onShowPopup, cartItemCount }) => {
  return (
    <nav className="dark:bg-gray-900 px-4 py-4 fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-8 lg:px-24 ml-8 sm:ml-0">
        <a className=" hidden sm:block text-xl md:text-2xl font-bold text-divineGreen">DivineBook</a>
        <div className="flex items-center space-x-3 md:space-x-5">
          <div className="w-8 h-8 md:w-10 md:h-10 bg-customGreen rounded flex justify-center items-center border-[#91EFD0]">
            <IoNotifications className="text-divineGreen text-xl md:text-2xl" />
          </div>
          <div className="w-8 h-8 md:w-10 md:h-10 bg-customGreen rounded flex justify-center items-center border-[#91EFD0]">
            <DarkMode />
          </div>
          <div onClick={onShowPopup} className="w-8 h-8 md:w-10 md:h-10 bg-customGreen rounded flex justify-center items-center border-[#91EFD0] cursor-pointer relative">
            <BsCart3 className="text-divineGreen text-xl md:text-2xl" />
            <div className="absolute top-0 left-7 bg-gray-600 dark:bg-white rounded-full w-5 h-5 flex items-center justify-center">
              <span className="dark:text-rose-700 text-white text-xs">{cartItemCount}</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
