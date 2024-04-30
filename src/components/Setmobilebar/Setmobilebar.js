import React from 'react';
import './Setmobilebar.css';
import {ReactComponent as HomeIcon} from './../../images/icons/menu.svg';
import {ReactComponent as NotificationIcon} from './../../images/icons/notification.svg';

function Setmobilebar () {
    return (
        <div className="mobilebar-container">
            <div className="icon-home">
                <HomeIcon fill="black" />
                <span>Home</span>
            </div>
            <div className="icon-notification">
                <div className="notification-circle">
                    <NotificationIcon fill="black" />
                </div>
            </div>
        </div>
        
    );
}

export default Setmobilebar;