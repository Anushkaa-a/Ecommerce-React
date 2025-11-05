import '../css/ProductCard.css'
import { useContext } from "react";
import { CartContext } from "./CartContext";
import { Link } from 'react-router-dom';


const ProductCard = ({product, isCartItem=false,}) => {
  const {addToCart, removeFromCart, addToWishlist, removeFromWishlist, isInWishlist} =useContext(CartContext);

  const favorite = isInWishlist(product.id);

function onFavoriteClick() {
  if (favorite) removeFromWishlist(product.id);
  else addToWishlist(product);
}

  return (
    <Link to={`/product/${product.id}`} className="product-card">
    <div className='product-pg'>
       <div className="product-card">
        <div className="product-img">
          <button className={`wishlist-btn ${favorite ? "active" : ""}`} 
          onClick={(e)=>{
              e.preventDefault()
              e.stopPropagation()
            onFavoriteClick()}
          }>
            <i className="fa-solid fa-heart"></i>
          </button>
            <img src={product.images[0]} alt="Product image" />
        </div>
        <div className="product-info">
            <h3>{product.title}</h3>
            <h2>${product.price}</h2>
            {!isCartItem ? (
          <button className='addTobtn' 
            onClick={(e) => {
             e.preventDefault();
             e.stopPropagation();
             addToCart(product);
             }}>
            Add To Cart
          </button>
        ) : (
          <button className='removeBtn' 
            onClick={(e) => {
             e.preventDefault();
             e.stopPropagation();
             removeFromCart(product.id);
             }}>
            Remove
          </button>
        )}
        </div>
       </div>
    </div>
    </Link>
  )
}

export default ProductCard