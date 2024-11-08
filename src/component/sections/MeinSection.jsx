import { useState } from "react";
import RightSideBar from "./RightSideBar";
import GellaryItems from "./GellaryItems";
import LeftSideBar from "./LeftSideBar";
import Footer from "./Footer";

function MeinSection({ onImgPopup, onSearch, onAdd, isInCart, onFavoritePopup, onAddToFavorite, isFavorite, favoriteCount }) {
  const [filter, setFilter] = useState("");

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  return (
    <>
      <section className="bg-gray-900 dark:bg-white border border-t-[#595959] border-b-[#595959] mt-16">
        <div className="max-w-[1420px] mx-auto text-white">
          {/* Wrapper for consistent background on all screens */}
          <div className="bg-gray-800 dark:bg-white p-4 sm:p-8 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6">

              {/* Left Sidebar - 2 columns on medium screens */}
              <div className="col-span-12 md:col-span-2">
                <LeftSideBar
                  onFavoritePopup={onFavoritePopup}
                  onSearch={onSearch}
                  onFilterChange={handleFilterChange}
                  favoriteCount={favoriteCount}
                />
              </div>

              {/* Gallery Items - 8 columns on medium screens */}
              <div className="col-span-12 md:col-span-8">
                <GellaryItems
                  isFavorite={isFavorite}
                  onAddToFavorite={onAddToFavorite}
                  onAdd={onAdd}
                  onImgPopup={onImgPopup}
                  filter={filter}
                  isInCart={isInCart}
                />
              </div>

              {/* Right Sidebar - 2 columns on medium screens */}
              <div className="col-span-12 md:col-span-2">
                <RightSideBar onFilterChange={handleFilterChange} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default MeinSection;
