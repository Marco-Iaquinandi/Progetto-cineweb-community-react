import React from 'react';
import './Button.css';

const Button = ({children}) => {
    return (
        <div className="acquista-abbonamento">
            <button className="acquistaAbb">{children}</button>
        </div>
    );
};

export default Button;