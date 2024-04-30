import React from 'react';
import { Link } from 'react-router-dom';
import './BottonfocusMoney.css';
import { ReactComponent as IconSVG } from './../../images/icons/money1.svg';

function BottonfocusMoney ({ text }) {
    return (
        <div>
            <button className="button-focus-container">
                <div className="buttonfocus-content">
                    <div className="icon-container">
                        <IconSVG fill="yellow" />  {/* Aplica el fill directamente aquí */}
                    </div>
                    <div className="buttonfocus-text-container">
                        <p>{text}</p>
                    </div>
                </div>
            </button>
        </div>
    );
}

export default BottonfocusMoney ;





