import React from 'react';
import './Notifications.css';
import close_icon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';

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
                <NotificationItem type={"default"} value={"New course available"} />
                <NotificationItem type={"urgent"} value={"New resume available"}/>
                <NotificationItem type={"urgent"} html={{ __html: getLatestNotification() }}/>
            </ul>
        </div>
    );
}