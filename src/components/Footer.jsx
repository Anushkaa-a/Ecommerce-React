import React from 'react'
import '../css/Footer.css';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
        <div className='box-container'>
          <div className="footer-links">
            <h3>Online Shopping</h3>
           <Link to="/">Home</Link>
           <Link to="/category/women">Women</Link>
           <Link to="/category/men">Men</Link>
           <Link to="/category/furniture">Furniture</Link>
           <Link to="/category/smart-devices">Smart Devices</Link>
           <Link to="/category/skin-care">Skincare</Link>
           <Link to="/category/kitchen">Kitchen</Link>
      </div>
      <div className="box1">
        <h3>Get to know us</h3>
        <p>About us</p>
        <p>Careers</p>
        <p>Press Releases</p>
      </div>
      <div className="box2">
        <h3>Connect with us</h3>
        <p>Facebook</p>
        <p>Instagram</p>
        <p>Instagram</p>
      </div>
      <div className="box3">
        <h3>Let Us Help You</h3>
        <p>Your Account</p>
        <p>Return Policy</p>
        <p>100% Purchase Protection</p>
        <p>Recalls and Product Safety Alerts</p>
      </div>
    </div>
     <div className="cpy-ryt">
        <p>Conditions of Use & Sale</p>
         <p>Privacy Notice</p>
         <p>Interest-Based Ads</p>
         <div className="date">
          <p className="footer-text">© {new Date().getFullYear()} Store. All rights reserved.</p>
         </div>
      </div>
    </div>
  )
}

export default Footer