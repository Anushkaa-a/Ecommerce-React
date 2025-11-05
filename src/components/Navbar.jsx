import React, { useState, useEffect } from 'react'
import '../css/Navbar.css'
import { Link, useNavigate } from 'react-router-dom'
import { searchProducts } from '../api/api'
import Home from '../pages/Home'

const Navbar = ({setQuery, query}) => {
    const [menuOpen, setMenuOpen] = useState(false);

     const navigate = useNavigate();

     useEffect(() => {
  if (menuOpen) document.body.classList.add("nav-open");
  else document.body.classList.remove("nav-open");
}, [menuOpen]);


     const handleSearch = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    navigate(`/search?query=${query}`);
    setQuery(''); 
  };

  return (
    <div className='navbar'>
        <div className="nav">
            <div className="nav-brand"><i className="fa-solid fa-shop"></i></div>
              <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                  <i className="fa-solid fa-bars"></i>
             </div>
             <div className="search">
             <input type="text"
              placeholder='Search'
              value={query}
              onChange={(e)=> setQuery(e.target.value)}
              onKeyDown={(e)=> e.key === 'Enter' && handleSearch()}
              />
             <button className='search-btn' onClick={handleSearch}>
              <i className="fa-solid fa-magnifying-glass"></i>
              </button>
             </div>
             <div className="nav-icons">
               <div className="wishlist">
                  <Link to={'/wishlist'}> <i className="fa-regular fa-heart"></i>
                    <p>Wishlist</p></Link>
               </div>
               <div className="cart">
                 <Link to={'/my-cart'}> <i className="fa-solid fa-cart-shopping"></i>
                  <p>Cart</p></Link>
               </div>
            </div>
        </div>
       <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
         <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
         <Link to="/category/women" onClick={() => setMenuOpen(false)}>Women</Link>
         <Link to="/category/men" onClick={() => setMenuOpen(false)}>Men</Link>
         <Link to="/category/furniture" onClick={() => setMenuOpen(false)}>Furniture</Link>
         <Link to="/category/smart-devices" onClick={() => setMenuOpen(false)}>Smart-Devices</Link>
         <Link to="/category/skin-care" onClick={() => setMenuOpen(false)}>Skincare</Link>
         <Link to="/category/kitchen" onClick={() => setMenuOpen(false)}>Kitchen</Link>
       </div>
    </div>
  )
}

export default Navbar