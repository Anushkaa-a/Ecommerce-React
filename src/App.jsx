import { useEffect, useState } from "react";
import { Route, Routes, Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import CategoryPage from "./pages/CategoryPage";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import ProductDetails from "./pages/ProductDetails";
import Footer from "./components/Footer";
import SearchResults from './pages/SearchResults';

function App() {
  const [query, setQuery] = useState("");
  
  return (
    <>
    <main>
      <Navbar setQuery={setQuery} query = {query} />
      <Routes>
        <Route path="/" element={<Home searchQuery={query} />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/category/:category" element={<CategoryPage />} />
        <Route path="/product/:id" element={<ProductDetails/> } />
        <Route path="/my-cart" element={<Cart/>}></Route>
        <Route path="/wishlist" element={<Wishlist/>}></Route>
      </Routes>
         <Footer />
    </main>
    </>
  )
}

export default App
