import React from 'react';
import './Notifications.css';
import close_icon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';

export default function Notifications() {
    return (
        <div className='Notifications'>
            <button
              type='button'
              aria-label="Close"
              style={{display: "block", marginRight: "0px", marginLeft: "auto",
              border: "none", height: ".1rem", background: "none"}}
              onClick={() => console.log("Close button has been clicked")}
              >
                <img src={close_icon} alt="Close icon" />
            </button>
            <p>Here is the list of notifications</p>
            <ul>
                <li data-priority="default">New course available</li>
                <li data-priority="urgent">New resume available</li>
                <li data-priority="urgent">
                    <div dangerouslySetInnerHTML={{ __html: `${getLatestNotification()}` }}>

                    </div>
                </li>
            </ul>
        </div>
    );
}