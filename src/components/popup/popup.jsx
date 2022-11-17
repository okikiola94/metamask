import "./popup.css";
import React from "react";
import Walletpopup from '../walletpopup/walletpopup';
import { Link } from "react-router-dom";
 
 
 
 
const PopUp = (props) => {
  return (
    <div className="popup-backdrop"  >
 
        <img onClick={(props.exit)} className='popup_icon' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADKSURBVHgB7ZQ9DsMgDIUdugLqCNyiN+iN2huUbh17nW7N1qOww9CNGilIHQh/yZZ8EoojXuzEfgFgZ5tIKS9KqVuLHtc1tUdmnhm897qmyKR5ov4ILQghNL6VzxUJe0ETtNBDrsji5LkiLckPJYFz7k0pHTDUnHNgjJ3DfHDdjTEa1iJ+SWtbSLWQEJ+KSxRbFAg9j23B2xGmdllrR1hKaqA1Fu5OvlqRGit2F2nx+Z+7kmdRcsjo+xNeXujzBxSI/wnyxfgDO9vjB11ZYo38vKDAAAAAAElFTkSuQmCC" alt="close" id="close-popup" />
 
        <div
          className="popup-navigation-menu" id="nav-pop">
          <Link to="/" id="contact">Home</Link>
         
          <Link to="/places" id="contact">Place to stay</Link>
 
 
          <Link to="/fullname" id="contact">NFTs</Link>
 
          <Link to="/fullname" id="contact">Community</Link>
          <Walletpopup />
 
 
      </div>
    </div>
 
  )
}
 
export default PopUp;

