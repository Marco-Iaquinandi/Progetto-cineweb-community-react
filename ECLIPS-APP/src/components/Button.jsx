import React from 'react';
import './Button.css';

const Button = ({text, cssClass, onClick}) => {
    return (
          <button className={cssClass}  onClick={onClick} >{text}</button>
    );
};

export default Button;