import "./popup.css";
import React from "react";
import Walletpopup from '../walletpopup/walletpopup';
import { Link } from "react-router-dom";




const PopUp = (props) => {
    return ( 
      <div className="popup-backdrop"  >
       
        <div className="popup-body">
        <img  onClick={(props.exit)} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADKSURBVHgB7ZQ9DsMgDIUdugLqCNyiN+iN2huUbh17nW7N1qOww9CNGilIHQh/yZZ8EoojXuzEfgFgZ5tIKS9KqVuLHtc1tUdmnhm897qmyKR5ov4ILQghNL6VzxUJe0ETtNBDrsji5LkiLckPJYFz7k0pHTDUnHNgjJ3DfHDdjTEa1iJ+SWtbSLWQEJ+KSxRbFAg9j23B2xGmdllrR1hKaqA1Fu5OvlqRGit2F2nx+Z+7kmdRcsjo+xNeXujzBxSI/wnyxfgDO9vjB11ZYo38vKDAAAAAAElFTkSuQmCC" alt="close" id="close-popup"/>

        <div
        className="popup-navigation-menu" id="nav-pop">
        <ul className="navigation-popup_">
          <li>
          <div className="link-container-popup">
          <Link to="/" id="contact">Home</Link>
          </div>
          </li>
          <li>
          <div className="link-container">
          <Link to="/places" id="contact">Place to stay</Link>
          </div>
          </li>
          <li>
          <div className="link-container">
          <Link to="/fullname" id="contact">NFTs</Link>
          </div>
          </li>
          <li>
          <div className="link-container">
          <Link to="/fullname" id="contact">Community</Link>
          </div>
          </li>

<li>
<div className="avatar">
           <Walletpopup/>
          </div>
</li>
        </ul>
        


        </div>
      </div>
      </div>
  
    )
  }
  
  export default PopUp;