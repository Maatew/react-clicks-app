import React from 'react';
import '../stylesheets/button.css';

function Button( {text, buttonClick, doesClick} ){
    return (
        <button 
            className = {buttonClick ? 'button-click' : 'button-reset' }
            onClick = {doesClick}>
            {text}
        </button>
    );
}

export default Button;