import { FaStar } from "react-icons/fa";
import { MdOutlineFavoriteBorder, MdFavorite } from "react-icons/md";
import { GetImages } from "../../helpreFunction/GetImages";
import { BookData } from "../../assets/data/BookData";

function GellaryItems({ onImgPopup, filter, onAdd, isInCart, onAddToFavorite, isFavorite }) {
  const bookData = BookData();

  let filteredData = [...bookData];
  if (filter === "name") {
    filteredData = filteredData.sort((a, b) => a.name.localeCompare(b.name));
  } else if (filter === "rating") {
    filteredData = filteredData.sort((a, b) => b.rating - a.rating);
  } else if (filter === "price") {
    filteredData = filteredData.sort((a, b) => a.price - b.price);
  } else if (filter === "new_releases" || filter === "coming_soon" || filter === 5) {
    filteredData = filteredData.filter(item => item.status === filter || item.rating === filter);
  }

  return (
    <div className="col-span-8 order-2 sm:order-1 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 border-l border-r px-4 z-50">
        {filteredData.map((gelary) => (
          <div
            key={gelary.id}
            className="border border-[#595959] p-4 mt-4 mb-4 rounded shadow cursor-pointer"
          >
            <div onClick={() => onImgPopup(gelary)}>
              <img
                className="w-full h-auto"
                src={GetImages(`../assets/images/${gelary.image}`)}
                alt={gelary.name}
              />
            </div>
            <div>
              <h2 className="text-[12px] mt-2 text-white dark:text-gray-800">{gelary.name}</h2>
              <p className="text-[10px] mt-2 text-[#8C8C8C]">{gelary.author}</p>
              <div className="flex items-center mb-3 mt-2">
                {[...Array(gelary.rating)].map((_, i) => (
                  <FaStar key={i} className="text-[#00D991] ml-2" />
                ))}
              </div>
            </div>
            <div className="flex justify-between items-center">
              <button
                onClick={() => onAdd(gelary)}
                className={`bg-[#00D991] py-2 px-6 rounded text-[#171923] ${isInCart(gelary.id) ? "opacity-50 cursor-not-allowed" : ""}`}
                disabled={isInCart(gelary.id)}
              >
                {isInCart(gelary.id) ? "Added to Cart" : `$${gelary.price} | Add to cart`}
              </button>
              <div onClick={() => onAddToFavorite(gelary)} className="cursor-pointer w-8 h-8 rounded flex justify-center items-center border border-green-400">
                {isFavorite(gelary.id) ? (
                  <MdFavorite className="text-red-500 text-2xl" />
                ) : (
                  <MdOutlineFavoriteBorder className="text-divineGreen text-2xl" />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GellaryItems;
