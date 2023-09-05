import React from "react";
import "./Notifications.css";
import NotificationItem from "./NotificationItem";
import close_icon from "../assets/close-icon.png";
import PropTypes from "prop-types";
import NotificationItemShape from "./NotificationItemShape";

export default class Notifications extends React.Component{
    constructor(props) {
        super(props);
        this.markAsRead =this.markAsRead.bind(this);
    }
    markAsRead(id) {
        console.log(`Notification ${id} has been marked as read`);
    }
    shouldComponentUpdate(nextProps) {
        if (nextProps.listNotifications.length > this.props.listNotifications.length){
            return true
        }
        return false
    }
    render() {
        return (
            <>
            <div className="menuItem">
                <p>Your notifications</p>
            </div>
            {this.props.displayDrawer && (
                <div className="Notifications">
                    <button
                    style={{position: "absolute", right: ".5em", border: "none"}}
                    aria-label="Close"
                    onClick={() => console.log("Close button has been clicked")}
                    >
                        <img src={close_icon} alt="" style={{width: "8px", height: "8px"}}/>
                    </button>
                    <p>Here is the list of notifications</p>
                    <ul>
                        {this.props.listNotifications.length === 0 && (
                            <NotificationItem 
                              type="default" 
                              value="No new notification for now" 
                              markAsRead={this.markAsRead}/>
                        )}
                        {this.props.listNotifications.map((item) => {
                            return <NotificationItem
                                    key={item.id}
                                    type={item.type}
                                    value={item.value}
                                    html={item.html}
                                    markAsRead={this.markAsRead}/>
                        })}
                    </ul>
                </div>
            )}
            </>
        );
    }
}

Notifications.defaultProps = {
    displayDrawer: false,
    listNotifications: []
}

Notifications.propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.arrayOf(NotificationItemShape)
}