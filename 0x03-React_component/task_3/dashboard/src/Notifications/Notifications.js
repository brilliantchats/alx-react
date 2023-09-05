import React from 'react';
import './Notifications.css';
import close_icon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';
import PropTypes from "prop-types";
import NotificationItemShape from "./NotificationItemShape";

export default class Notifications extends React.Component {
    constructor(props) {
        super(props);
        this.markAsRead = this.markAsRead.bind(this);
    }
    markAsRead(id) {
        console.log(`Notification ${id} has been marked as read`);
    }
    render() {
        return (
            <>
              <div className='menuItem'>
                  <p>Your notifications</p>
              </div>
              {this.props.displayDrawer && (
                    <div className='Notifications'>
                        <p>Here is the list of notifications</p>
                        <ul>
                            {this.props.listNotifications.length === 0 && (
                                <NotificationItem
                                  value='No new notification for now'
                                  markAsRead={this.markAsRead}
                                />
                            )}
                            {this.props.listNotifications.map((notification) => (
                              <NotificationItem
                                key={notification.id}
                                type={notification.type}
                                value={notification.value}
                                html={notification.html}
                                markAsRead={this.markAsRead}
                              />
                            ))}
                        </ul>
                        <button
                          type='button'
                          aria-label="Close"
                          style={{display: "block", marginRight: "0px", marginLeft: "auto",
                          border: "none", height: ".1rem", background: "none"}}
                          onClick={() => console.log("Close button has been clicked")}
                        >
                            <img src={close_icon} alt="Close icon" />
                        </button>
                    </div>
              )}
            </>
        );
    }
}

Notifications.defaultProps = {
    displayDrawer: false,
    listNotifications: [],
};
Notifications.propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.arrayOf(NotificationItemShape),
};