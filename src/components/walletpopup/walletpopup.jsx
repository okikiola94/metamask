import Wallet from "../wallet/wallet";
import { useState } from "react";
import "./walletpopup.css"
const Walletpopup = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
 
  return (
    <div>
 
      <button onClick={() => {
        setIsNavExpanded(!isNavExpanded);
      }} className="connect-wallet">Connect wallet</button>
 
 
 
      {isNavExpanded && <Wallet exit={() => setIsNavExpanded(false)} />
      }
 
 
 
    </div>);
}
 
 
export default Walletpopup;

