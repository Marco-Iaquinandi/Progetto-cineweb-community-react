import React from 'react';
import Navbar from './components/Navbar';
import "./index.css";


function App () {
    return (
        <>
        <Navbar links={[
            { url: "/", text: "Home" },
            { url: "/", text: "Coming Soon" },
            { url: "/", text: "Promo" },
            { url: "/", text: "Dove Trovarci"},
        ]} />
        
        </>
    )
};

export default App;