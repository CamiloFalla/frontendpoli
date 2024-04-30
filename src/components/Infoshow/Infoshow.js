import React from 'react';
import { Link } from 'react-router-dom';
import './Infoshow.css';

function Infoshow ({ backgroundImage, text}) {
    return (
        <div>
            <button className="image-button" style={{ backgroundImage: `url(${backgroundImage})` }}>
                <span className="button-text">{text}</span>
            </button>
        </div>
    );
}

export default Infoshow;