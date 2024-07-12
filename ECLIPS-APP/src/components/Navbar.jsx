import React, {  useState } from 'react';
import './NavBar.css'; 
import Button from './Button';


function Navbar({ links }) {

  return (
    <>
    <nav className='container-navbar'>
      <img className='logo-img' src='src/assets/img/Logo.png'></img>
      <ul className="navbar-links">
        {links.map((link, index) => (
          <li className='linkNav' key={index}>
            <a href={link.url}>{link.text}</a>
          </li>
        ))}
      </ul>
        <Button text="LOG IN" cssClass={"Button-LogIN show-list"}/>
    </nav>
    </>
   
  );
};
export default Navbar