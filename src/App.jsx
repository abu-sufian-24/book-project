import { useState } from "react";
import Navbar from "./component/navbar/Navbar";
import MeinSection from "./component/sections/MeinSection";
import ImgPopup from "./component/ImgPopup";
import SearchPopup from "./component/SearchPopup";
import AddToCartPopup from "./component/AddToCartPopup";
import FavoritePopup from "./component/FavoritePopup";



function App() {
  const [openImgPopup, setOpenImgPopup] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [showFavoritesPopup, setShowFavoritesPopup] = useState(false);
  const [searchPopup, setSearchPopup] = useState(false);
  const [showAddToCartPopup, setShowAddToCartPopap] = useState(false);
  const [cartItem, setCartItem] = useState([]);
  const [favoriteItem, setFavoriteItem] = useState([])


  const handleDeleteCart = (id) => {
    setCartItem(cartItem.filter(item => item.id !== id));
  };
  const handleQuantityChange = (id, amount) => {
    setCartItem(cartItem.map(item =>
      item.id === id ? { ...item, Quantity: Math.max(1, item.Quantity + amount) } : item
    ));
  };

  const handleAddToCart = (data) => {
    const newData = {
      id: data.id,
      name: data.name,
      price: data.price,
      image: data.image,
      author: data.author,
      Quantity: 1,
    };
    const addDone = cartItem.find(item => item.id === data.id);
    if (addDone === undefined) {
      setCartItem([...cartItem, newData]);
    }
  };
  const isInCart = (id) => cartItem.some(item => item.id === id);

  const handleAddToFavorite = (data) => {
    const isFavorite = favoriteItem.some(item => item.id === data.id);
    if (isFavorite) {
      // Remove from favorites if already added
      setFavoriteItem(favoriteItem.filter(item => item.id !== data.id));
    } else {
      // Add to favorites if not already added
      setFavoriteItem([...favoriteItem, data]);
    }
  };

  const handleDeleteFavoriteCart = (id) => {
    setFavoriteItem(favoriteItem.filter(item => item.id !== id));
  };

  const handleSearch = () => setSearchPopup(true);

  const handleOpenImgPopup = (item) => {
    setSelectedItem(item);
    setOpenImgPopup(true);
  };

  const handleCloseImgPopup = () => {
    setOpenImgPopup(false);
    setSelectedItem(null);
  };

  const handleOpenCartPopup = () => {
    setShowAddToCartPopap(true);
  };

  const handleShowFavoritePopup = () => {
    setShowFavoritesPopup(true);
  };

  const isFavorite = (id) => favoriteItem.some(item => item.id === id);

  return (
    <div>
      <Navbar cartItemCount={cartItem.length} onShowPopup={handleOpenCartPopup} />
      <MeinSection
        onAddToFavorite={handleAddToFavorite}
        onFavoritePopup={handleShowFavoritePopup}
        onAdd={handleAddToCart}
        onSearch={handleSearch}
        onImgPopup={handleOpenImgPopup}
        isInCart={isInCart}
        isFavorite={isFavorite}
        favoriteCount={favoriteItem.length}
      />
      {showAddToCartPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="w-full max-w-[1000px] max-h-[90vh] overflow-y-auto bg-white p-4 rounded-lg shadow-lg relative ">
            <AddToCartPopup onQuantityChange={handleQuantityChange} onDelete={handleDeleteCart} newData={cartItem} onClose={() => setShowAddToCartPopap(false)} />
          </div>
        </div>
      )}
      {openImgPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <ImgPopup isFavorite={isFavorite} onAddToFavorite={handleAddToFavorite} isInCart={isInCart} onAdd={handleAddToCart} item={selectedItem} onClose={handleCloseImgPopup} />
        </div>
      )}
      {searchPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="w-full max-w-lg max-h-[80vh] overflow-y-auto bg-white p-6 rounded-lg shadow-lg relative">
            <SearchPopup onClose={() => setSearchPopup(false)} />
          </div>
        </div>
      )}
      {showFavoritesPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="w-full max-w-[1000px] max-h-[90vh] overflow-y-auto bg-white p-6 rounded-lg shadow-lg relative">
            <FavoritePopup isInCart={isInCart} onAdd={handleAddToCart} onDelete={handleDeleteFavoriteCart} favoriteData={favoriteItem} onClose={() => setShowFavoritesPopup(false)} />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
