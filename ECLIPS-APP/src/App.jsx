import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from "./components/pages/HomePage";
import "./index.css";
import PromoPage from './components/pages/PromoPage';
import Navbar from './components/Navbar';

function App () {
    return (
        
        <BrowserRouter>
         <Navbar
        links={[
          { url: "/", text: "Home" },
          { url: "#", text: "Coming Soon" },
          { url: "promo", text: "Promo" },
          { url: "#", text: "Dove Trovarci" },
        ]}
      ></Navbar>
        <Routes>
          <Route path='/' element= { <HomePage />} />
          <Route path='/promo' element= { <PromoPage />} />
        </Routes>
        </BrowserRouter>
       
        
    
    )
};

export default App;