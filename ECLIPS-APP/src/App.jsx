import React from 'react';
import HomePage from "./components/pages/HomePage";
import "./index.css";
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
            <HomePage />
        </PrimeReactProvider>
    )
};

export default App;