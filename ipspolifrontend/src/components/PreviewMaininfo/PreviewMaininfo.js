import React from 'react';
import { Link } from 'react-router-dom';
import './PreviewMainfo.css';

function PreviewMainfo ({ imageSrc, text}) {
    return (
        <div>
            <button className="diagonal-button">
                <div className="buttonpreview-content">
                    
                    <div className="text-container">
                        <p>{text}</p>
                    </div>
                    <div className="imagepreview-container">
                        <img src={imageSrc} alt="imagedesc" />
                    </div>
                </div>
            </button>
        </div>
    );
}

export default PreviewMainfo;