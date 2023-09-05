import React from "react";
import PropTypes from "prop-types";

export default function NotificationItem({type, html, value, markAsRead, id}) {
    let li;

    value
    ? (li = <li data-notification-type={type} onClick={() => markAsRead(id)}>{value}</li>)
    : (li = <li data-notification-type={type} dangerouslySetInnerHTML={html} onClick={() => markAsRead(id)}></li>);

    return li;
}

NotificationItem.defaultProps = {
    type: 'default',
    value: '',
    html: {},
    markAsRead: () => {return},
    id: NaN
}

NotificationItem.propTypes = {
    type: PropTypes.string.isRequired,
    value: PropTypes.string,
    markAsRead: PropTypes.func,
    id: PropTypes.number,
    html: PropTypes.shape({
        __html: PropTypes.string
    })
};