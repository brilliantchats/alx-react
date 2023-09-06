import React from "react";
import PropTypes from "prop-types";

export default class NotificationItem extends React.PureComponent{
    constructor(props) {
        super(props);
    }
    render() {
        return(
            this.props.value
            ? (<li 
                data-notification-type={this.props.type} 
                onClick={() => this.props.markAsRead(this.props.id)}>
                {this.props.value}
            </li>)
            : (<li 
                data-notification-type={this.props.type} 
                dangerouslySetInnerHTML={this.props.html} 
                onClick={() => this.props.markAsRead(this.props.id)}>
                </li>)
        )
    }
}

NotificationItem.defaultProps = {
    type: "default",
    id: NaN,
    markAsRead: function() {return},
    value: '',
    html: {}
}

NotificationItem.propTypes = {
    html: PropTypes.shape(
        {__html: PropTypes.string}
    ),
    type: PropTypes.string,
    value: PropTypes.string,
    id: PropTypes.number,
    markAsRead: PropTypes.func
}