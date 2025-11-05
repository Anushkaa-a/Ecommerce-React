import { useContext } from "react";
import { CartContext } from "../components/CartContext";
import ProductCard from "../components/ProductCard";
import '../css/Cart.css'
import emptyCartImg from "../assets/cart-img.jpg";

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  return (
    <div className="cart-container">
      {cartItems.length === 0 && (
       <div className="emptyCart-container">
         <img src={emptyCartImg} alt="Empty cart" className="empty-cart-img" />
         <p>There is nothing in your cart. Let's add items!</p>
       </div>
      )}
      <div className="cart-products">
        {cartItems.map((item) => (
          <ProductCard key={item.id} product={item} isCartItem={true} />
          
        ))}
      </div>
    </div>
    
  );
};

export default Cart;
