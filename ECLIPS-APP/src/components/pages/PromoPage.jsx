import React from "react";
import List from "../List";
import Navbar from "../Navbar";
import "../../index.css";

function PromoPage () {
    return (
        <>
        <Navbar  links={[
          { url: "/", text: "Home" },
          { url: "#", text: "Coming Soon" },
          { url: "promo", text: "Promo" },
          { url: "#", text: "Dove Trovarci" }
        ]}/>
         <List title ="LISTINO PREZZI" image="../src/assets/img/immaginebiglietti.png" />
         <List title ="CONVENZIONI E SCONTI" image = "  ../src/assets/img/immaginepromo.png" />
         <List title ="ABBONAMENTI" image="../src/assets/img/tesseraabbonamento.png" />
        </>
    )
};

export default PromoPage;

