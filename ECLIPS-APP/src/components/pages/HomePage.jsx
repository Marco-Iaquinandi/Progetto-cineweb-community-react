import React from 'react';
import Navbar from '../NavBar';
import "../../index.css";


function HomePage () {
    return (
        <>
        <Navbar links={[
            { url: "#", text: "Home" },
            { url: "#", text: "Coming Soon" },
            { url: "#", text: "Promo" },
            { url: "#", text: "Dove Trovarci"},
        ]} />
        
        </>
    )
};

export default HomePage;