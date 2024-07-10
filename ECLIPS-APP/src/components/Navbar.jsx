import React, { useState } from 'react';
import './Navbar.css'; 
import Button from './Button';



function Navbar({ links }) {

  return (
    <>
    <nav className='container-navbar'>
      <img className='logo-img' src='src/assets/img/Logo.png'></img>
      <ul className="navbar-links">
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.url}>{link.text}</a>
          </li>
        ))}
      </ul>
        <Button className="button-LogIN">LOG IN</Button>
    </nav>
    </>
   
  );
};
export default Navbar