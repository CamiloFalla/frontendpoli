import React from 'react';
import './Infoshow.css';

function Infoshow ({ backgroundImage, text}) {
    return (
        <div>
            <button className="image-button" alt="" style={{ backgroundImage: `url(${backgroundImage})` }}>
                <span className="button-text">{text}</span>
            </button>
        </div>
    );
}

export default Infoshow;