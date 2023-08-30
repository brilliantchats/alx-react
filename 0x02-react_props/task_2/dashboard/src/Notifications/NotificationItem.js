import React from "react";

export default function NotificationItem({type, html, value}) {
    let li;

    value
    ? li = <li data-notification-type={type}>{value}</li>
    : li = <li data-notification-type={type} dangerouslySetInnerHTML={html}></li>;

    return li;
}