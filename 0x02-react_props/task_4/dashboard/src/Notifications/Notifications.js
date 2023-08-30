import React from 'react';
import './Notifications.css';
import close_icon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';
import PropTypes from "prop-types";

export default function Notifications({displayDrawer}) {
    return (
        <>
          <div className='menuItem'>
              <p>Your notifications</p>
          </div>
          {displayDrawer && (
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
          )}
        </>
    );
}

Notifications.defaultProps = {
    displayDrawer: false
};
Notifications.propTypes = {
    displayDrawer: PropTypes.bool
};