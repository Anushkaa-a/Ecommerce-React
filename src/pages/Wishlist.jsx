import { useContext } from "react";
import { CartContext } from "../components/CartContext";
import ProductCard from "../components/ProductCard";
import emptyWishlist from '../assets/empty-wishlist.jpg'
import '../css/Wishlist.css'

const Wishlist = () => {
  const { wishlistItems } = useContext(CartContext);

  return (
    <div className="wishlist-page">
      {wishlistItems.length === 0 ? (
        <div className="emptyWl">
          <img src={emptyWishlist} alt="Your wishlist is empty!" />
          <p>hmm, can't find any items :(</p>
        </div>
      ) : (
        <div className="products">
          {wishlistItems.map((item) => (
            <ProductCard 
              key={item.id} 
              product={item} 
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
