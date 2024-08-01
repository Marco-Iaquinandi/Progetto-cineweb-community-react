import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from "./components/pages/HomePage";
import "./index.css";
import PromoPage from './components/pages/PromoPage';
import Navbar from './components/Navbar';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import 'primeflex/primeflex.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';

function App () {
    return (
       <PrimeReactProvider >
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
      </PrimeReactProvider>        
    )
};

export default App;