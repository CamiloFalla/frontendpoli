import React from 'react';
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