import "./popup.css";
import React from "react";
import Wallet from "../wallet/wallet";
import { Link } from "react-router-dom";
import { useState } from "react";




const PopUp = (props) => {
    const [isNavExpanded, setIsNavExpanded] = useState(false);
    return ( 
      <div className="popup-backdrop"  >
       
        <div className="popup-body" onClick={(props.exit)}>
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
          <Link to="/" id="contact">NFTs</Link>
          </div>
          </li>
          <li>
          <div className="link-container">
          <Link to="/" id="contact">Community</Link>
          </div>
          </li>

<li onClick={() => {
      setIsNavExpanded(!isNavExpanded);}}className="connect-wallet">
    connect wallet     
</li>
{isNavExpanded && <Wallet exit={() => setIsNavExpanded(false)} />
  }
        </ul>
        


        </div>
        
      </div>
      </div>
  
    )
  }
  
  export default PopUp;