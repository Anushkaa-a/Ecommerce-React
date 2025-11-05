import { createContext, useContext, useState, useEffect } from "react";

export const CartContext = createContext()

export const CartProvider = ({children}) => {

     const [cartItems, setCartItems] = useState(() => JSON.parse(localStorage.getItem("cart")) || []);
  const [wishlistItems, setWishlistItems] = useState(() => JSON.parse(localStorage.getItem("wishlist")) || []);

  
  useEffect(() => { localStorage.setItem("cart", JSON.stringify(cartItems)); }, [cartItems]);
  useEffect(() => { localStorage.setItem("wishlist", JSON.stringify(wishlistItems)); }, [wishlistItems]);


   const addItem = (setter, product) => {
  setter(prev => prev.find(item => item.id === product.id) ? prev : [...prev, product]);
};

const removeItem = (setter, id) => {
  setter(prev => prev.filter(item => item.id !== id));
};

 const addToCart = product => addItem(setCartItems, product);
const removeFromCart = id => removeItem(setCartItems, id);

const addToWishlist = product => addItem(setWishlistItems, product);
const removeFromWishlist = id => removeItem(setWishlistItems, id);

  const isInWishlist = id => wishlistItems.some(item => item.id === id);

  const value = {
  cartItems, 
  addToCart, 
  removeFromCart,  
  wishlistItems, 
  addToWishlist, 
  removeFromWishlist,
  isInWishlist
  }

  return (
    <div>
        <CartContext.Provider value={value }>
            {children}
        </CartContext.Provider>
    </div>
  )
}

export const useCart = () =>useContext(CartContext)