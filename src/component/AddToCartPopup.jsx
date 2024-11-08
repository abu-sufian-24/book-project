import { RxCross2 } from "react-icons/rx";
import { FaMinus } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { HiOutlinePlusSmall } from "react-icons/hi2";
import { GetImages } from "../helpreFunction/GetImages";

function AddToCartPopup({ onClose, newData, onDelete, onQuantityChange }) {
  const calculateItemTotal = (price, quantity) => price * quantity;
  const calculateSubtotal = () =>
    newData.reduce((acc, item) => acc + calculateItemTotal(item.price, item.Quantity), 0);

  return (
    <div className="bg-gray-800 max-w-[1000px] mx-auto py-5 px-4 rounded">
      <div className="relative mb-4">
        <h2 className="text-white text-center text-2xl">Your Cart</h2>
        <RxCross2 onClick={onClose} className="text-gray-300 text-2xl absolute top-0 right-2 cursor-pointer" />
      </div>

      <div className="flex justify-between">
        <div className="overflow-auto w-[700px]">
          <table className="w-full text-white border-collapse">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="p-3 text-left">Product</th>
                <th className="p-3 text-left">Price</th>
                <th className="p-3 text-left">Quantity</th>
                <th className="p-3 text-left">Total</th>
              </tr>
            </thead>
            <tbody>
              {newData.length > 0 ? (
                newData.map(cart => (
                  <tr key={cart.id} className="border-b border-gray-700">
                    <td className="p-3 flex items-center space-x-3">
                      <img className="w-14" src={GetImages(`../assets/images/${cart.image}`)} alt="Product" />
                      <div>
                        <h3 className="text-[16px]">{cart.name}</h3>
                        <p className="text-[14px] mt-1 text-gray-400">{cart.author}</p>
                      </div>
                    </td>
                    <td className="p-3">${cart.price}</td>
                    <td className="p-3">
                      <div className="flex items-center bg-[#8C8C8C] p-1 justify-center rounded-2xl space-x-2">
                        <button
                          onClick={() => onQuantityChange(cart.id, -1)}
                          className="text-white"
                        >
                          <FaMinus />
                        </button>
                        <span className="text-white px-2">{cart.Quantity}</span>
                        <button
                          onClick={() => onQuantityChange(cart.id, 1)}
                          className="text-white"
                        >
                          <HiOutlinePlusSmall />
                        </button>
                      </div>
                    </td>
                    <td className="p-3">${calculateItemTotal(cart.price, cart.Quantity)}</td>
                    <td className="p-3 text-center text-2xl">
                      <MdDelete onClick={() => onDelete(cart.id)} className="text-white cursor-pointer" />
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center text-rose-500 py-8 font-bold text-xl sm:text-3xl">No Data Found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Order Summary Section */}
        <div className="ml-8">
          <div className="mt-10 bg-[#8c8c8c6d] w-[200px] p-5 mr-8 rounded-lg">
            <h3 className="text-white mb-3 border-b pb-2">Order Summary</h3>
            <div className="flex justify-between mb-4">
              <span className="text-white">Subtotal</span>
              <span className="text-white">${calculateSubtotal()}</span>
            </div>
            <div className="flex justify-between mb-4">
              <span className="text-white">Shipping</span>
              <span className="text-white">Free</span>
            </div>
            <div className="flex justify-between border-t pt-2 mt-2">
              <span className="text-white font-semibold">Total</span>
              <span className="text-white font-semibold">${calculateSubtotal()}</span>
            </div>
          </div>
          <button className="bg-[#009A67] text-white w-[200px] py-2 mt-4 rounded-lg">Checkout</button>
        </div>
      </div>
    </div>
  );
}

export default AddToCartPopup;
