import React, { useState } from "react";
import "./Navbar.css";
import Button from "./Button";

function Navbar({ links }) {
  const [showList, setShowList] = useState(false);


  return (
    <>
      <nav className="container-navbar">
        <img className="logo-img" src="src/assets/img/Logo.png"></img>
        <ul className="navbar-links">
          {links.map((link, index) => (
            <li className="linkNav" key={index}>
              <a href={link.url}>{link.text}</a>
            </li>
          ))}
        </ul>
        <div onMouseEnter={() => setShowList(true)} onMouseLeave={() => setShowList(false)} >
          <Button text="LOG IN" cssClass={"Button-LogIN"} />
          <div className="Container-LogIN-Menu"> 
            {showList && (
              <ul className="LogIN-Menu">
                <li>
                  <a href="#">Log In</a>
                </li>
                <li>
                  <a href="#">Registrati</a>
                </li>
              </ul>
            )}
          </div>
          
        </div>
      </nav>
    </>
  );
}
export default Navbar;
