import React from 'react';
import './Button.css';

const Button = ({text, cssClass,}) => {
    return (
          <button className={cssClass} >{text}</button>
    );
};

export default Button;