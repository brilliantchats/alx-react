import React from "react";
import NotificationItem from "./NotificationItem";
import close_icon from "../assets/close-icon.png";
import PropTypes from "prop-types";
import NotificationItemShape from "./NotificationItemShape";
import {StyleSheet, css} from "aphrodite";

export default class Notifications extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
            <div className={css(styles.menuItem)} onClick={this.props.handleDisplayDrawer} id="menuItem">
                <p>Your notifications</p>
            </div>
            {this.props.displayDrawer && (
                <div className={css(styles.notifications)}>
                    <button
                    style={{position: "absolute", right: ".5em", border: "none", cursor: "pointer"}}
                    aria-label="Close"
                    onClick={this.props.handleHideDrawer}
                    id="close"
                    >
                        <img src={close_icon} alt="" style={{width: "8px", height: "8px"}}/>
                    </button>
                    <p>Here is the list of notifications</p>
                    <ul>
                        {this.props.listNotifications.length === 0 && (
                            <NotificationItem 
                              type="default" 
                              value="No new notification for now" 
                              markAsRead={this.props.markNotificationAsRead}/>
                        )}
                        {this.props.listNotifications.map((item) => {
                            return <NotificationItem
                                    key={item.id}
                                    type={item.type}
                                    value={item.value}
                                    html={item.html}
                                    id={item.id}
                                    markAsRead={this.props.markNotificationAsRead}/>
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
    listNotifications: [],
    handleDisplayDrawer: () => {},
    handleHideDrawer: () => {},
    markNotificationAsRead: () => {}
}

Notifications.propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.arrayOf(NotificationItemShape),
    handleDisplayDrawer: PropTypes.func,
    handleHideDrawer: PropTypes.func,
    markNotificationAsRead: PropTypes.func
}

const styles = StyleSheet.create({
    notifications: {
        padding: '.5em',
        border: '1px dotted #c4372d',
        position: 'absolute',
        display: 'inline-block',
        top: '2rem',
        right: '2rem'
    },
    menuItem: {
        display: 'inline-block',
        position: 'absolute',
        top: '-.3rem',
        right: '2rem'
    },
});