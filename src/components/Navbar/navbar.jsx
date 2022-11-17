import React from 'react';
import { Link } from "react-router-dom";
import { useState } from 'react';
import PopUp from '../popup/popup';
import "./navbar.css";
import Walletpopup from '../walletpopup/walletpopup';
 
const Navbar = (props) => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  return (
    <nav className="navbar" id="nav">
 
      <img src={`${process.env.PUBLIC_URL}/assets/images/Group.svg`} id="product__logo" alt="Meta_logo" />
 
 
 
      <button className="hamburger" onClick={() => {
        setIsNavExpanded(!isNavExpanded);
      }}>
        <hr className='line' />
        <hr className='line' />
        <hr className='line' />
      </button>
      {isNavExpanded && <PopUp exit={() => setIsNavExpanded(false)} />
      }
 
      <div
        className="navigation-menu">
 
        <Link to="/" id="contact">Home</Link>
 
        < Link to="/places" id="contact">Place to stay</Link>
 
        <Link to="/" id="contact">NFTs</Link>
 
        <Link to="/" id="contact">Community</Link>
 
        <Walletpopup />
 
      </div>
 
    </nav >)
}
 
 
 
export default Navbar;
 
 

