import { GetImages } from "../helpreFunction/GetImages";
import { MdOutlineFavoriteBorder, MdFavorite } from "react-icons/md";
import { FaStar } from "react-icons/fa6";

function ImgPopup({ item, onClose, onAdd, isInCart, onAddToFavorite, isFavorite }) {
  return (
    <div className="max-w-4xl mx-auto bg-[#1E293B] p-4 md:grid md:grid-cols-12 gap-y-4 rounded-lg">
      {/* Content Section */}
      <div className="md:col-span-8">
        <h2 className="text-2xl md:text-4xl font-sans mt-4 md:mt-[66px] md:ml-20 text-white">
          {item.name}
        </h2>
        <p className="text-sm md:text-[16px] mt-2 md:ml-20 text-[#8C8C8C]">{item.author}</p>
        <p className="text-sm md:text-[16px] mt-4 md:ml-20 text-[#8C8C8C]">
          {item.description}
        </p>

        <div className="flex items-center mb-3 mt-2 md:ml-20">
          {[...Array(item.rating)].map((_, i) => (
            <FaStar key={i} className="text-[#00D991] ml-2" />
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-center md:justify-between mt-4 md:ml-20 space-y-4 md:space-y-0">
          <button
            onClick={() => onAdd(item)}
            className={`bg-[#00D991] py-2 px-6 rounded text-[#171923] ${isInCart(item.id) ? "opacity-50 cursor-not-allowed" : ""}`}
            disabled={isInCart(item.id)}
          >
            {isInCart(item.id) ? "Added to Cart" : `$${item.price} | Add to cart`}
          </button>
          <div onClick={() => onAddToFavorite(item)} className="w-8 h-8 rounded flex justify-center items-center border border-green-400 cursor-pointer">
            {isFavorite(item.id) ? <MdFavorite className="text-red-500 text-2xl" /> : <MdOutlineFavoriteBorder className="text-divineGreen text-2xl" />}
          </div>
          <button onClick={onClose} className="py-2 px-4 md:py-[10px] md:px-[33px] bg-slate-50 rounded md:mr-24">
            Close
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className="md:col-span-4 mt-4 md:mt-0">
        <img className="w-full rounded-lg" src={GetImages(`../assets/images/${item.image}`)} alt="img" />
      </div>
    </div>
  );
}

export default ImgPopup;

