import React from 'react';
import { Link } from "react-router-dom";
// import { useContext } from 'react';
// import "../../style/home.css";
import { useState } from 'react';
import PopUp from '../popup/popup';
import "./navbar.css";
import Walletpopup from '../walletpopup/walletpopup';

const Navbar = (props) => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  return (
     <nav className="navbar" id="nav">
      
            <div className="logo-image_container">
            <img src={`${process.env.PUBLIC_URL}/assets/images/Group.svg`}  id ="product__logo"  alt="Meta_logo"/>
             </div>
     

      <button className="hamburger" onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}>       
           <hr className='line'/> 
           <hr className='line'/>
           <hr className='line'/>
      </button>
      {isNavExpanded && <PopUp exit={() => setIsNavExpanded(false)} />
      }

      <div
        className="navigation-menu">
        <ul>
          <li>
          <div className="link-container">
          <Link to="/" id="contact">Home</Link>
          </div>
          </li>
          <li>
          <div className="link-container">
          < Link to ="/places" id="contact">Place to stay</Link>
          </div>
          </li>
          <li>
          <div className="link-container">
          <Link to  ="/" id="contact">NFTs</Link>
          </div>
          </li>
          <li>
          <div className="link-container">
          <Link to ="/" id="contact">Community</Link>
          </div>
          </li>
         <li> 
           <Walletpopup/>
          </li>
        </ul>
        
          </div>
          

    </nav>)}



export default Navbar;

