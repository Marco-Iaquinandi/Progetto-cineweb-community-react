import React from "react";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import PromoPage from "./components/pages/PromoPage";
import Navbar from "./components/Navbar";
import { PrimeReactProvider } from "primereact/api";
import FormRegister from "./components/FormRegister";
import FormLogIn from "./components/FormLogIn";
import { UserProvider } from "./components/ContextLog";
import "./index.css";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

function App() {
  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const toggleLoginDialog = () => {
    setShowLogin(!showLogin);
  };
  const toggleRegisterSidebar = () => {
    setShowRegister(!showRegister);
    setShowLogin(false);
  };

  return (
    <UserProvider>
      <PrimeReactProvider>
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
            <Route path="/" element={<HomePage />} />
            <Route path="/promo" element={<PromoPage />} />
            <Route path="/login" element={<FormLogIn isToggled={showLogin} onToggle={toggleLoginDialog} onRegisterClick={toggleRegisterSidebar} />} />
          </Routes>
        </BrowserRouter>
      </PrimeReactProvider>
    </UserProvider>
  );
}

export default App;
