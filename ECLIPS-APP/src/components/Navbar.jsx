import React, { useState } from "react";
import "./Navbar.css";
import Button from "./Button";
import FormLogIn  from "./FormLogIn";
import FormRegister from "./FormRegister";


function Navbar({ links }) {
  const [showList, setShowList] = useState(false);
  const [isToggled, setIsToggled] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const handleClick = () => {
    setIsToggled(!isToggled);
  };
  const handleShowRegister = () => {
    setShowRegister(!showRegister);
  };

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
                  <a href="#" data-istoggled={isToggled} onClick={handleClick}>Log In</a>
                </li>
                <li>
                  <a href="#" isShow={showRegister} onClick={handleShowRegister}>Registrati</a>
                </li>
              </ul>
            )}
          </div>
          
        </div>
      </nav>
      <FormLogIn isToggled={isToggled} onToggle={handleClick}/>
      <FormRegister showRegister={showRegister} onToggle={handleShowRegister} />
      
      
    </>
  );
}
export default Navbar;
