import React from "react";
import Cinema from "../Cinema";
import "../../index.css";
import "./StructurePage.css"

function StructurePage () {
    return (
        <>
        <div class="structure-choice">
      <h1>SCEGLI IL TUO E-CLIPS PIU' VICINO</h1>
    </div>
    <div className="cinema-container">
        <Cinema 
        name="E-CLIPS MERCURY"
        address="Via Mercurio 25 Palermo"
        phone=" 091 000 000"
        email=" mercury@eclipscinemas.it"
        scheduleLink=""
      />
       <Cinema 
        name="E-CLIPS VENUS"
        address="Via Venere 26 Catania"
        phone="095 000 000"
        email=" venus@eclipscinemas.it"
        scheduleLink=""
      />
       <Cinema 
        name="E-CLIPS NEPTUNE"
        address="Via Nettuno 27 Reggio Calabria"
        phone="0965 000 000"
        email=" neptune@eclipscinemas.it"
        scheduleLink=""
      />
       <Cinema 
        name="E-CLIPS MARS"
        address="Via Marte 28 Napoli"
        phone="081 000 000"
        email=" mars@eclipscinemas.it"
        scheduleLink=""
      />
       <Cinema 
        name="E-CLIPS SATURN"
        address="Via Saturno 29 Roma"
        phone="06 000 000"
        email=" saturn@eclipscinemas.it"
        scheduleLink=""
      />
       <Cinema 
        name="E-CLIPS URANUS"
        address="Via Urano 30 Matera"
        phone="0835 000 000"
        email=" uranus@eclipscinemas.it"
        scheduleLink=""
      />
       <Cinema 
        name="E-CLIPS JUPITER"
        address="Via Giove 31 Cagliari"
        phone="070 000 000"
        email=" jupiter@eclipscinemas.it"
        scheduleLink=""
      />
       <Cinema 
        name="E-CLIPS EARTH"
        address="Via Terra 32 Bari"
        phone="080 000 000"
        email=" earth@eclipscinemas.it"
        scheduleLink=""
      />
       <Cinema 
        name="E-CLIPS PLUTO"
        address="Via Plutone 33 Campobasso"
        phone="0874 000 000"
        email=" pluto@eclipscinemas.it"
        scheduleLink=""
      />
      </div>

        </>
    )
};

export default StructurePage;
