import React from "react";
import PropTypes from "prop-types";

export default class NotificationItem extends React.PureComponent {
    render() {
      const { type, value, html, markAsRead, id } = this.props;
      return (
        <>
          {type && value ? (
            <li onClick={() => markAsRead(id)} data-notification-type={type}>
              {value}
            </li>
          ) : null}
          {html ? <li onClick={() => markAsRead(id)} data-urgent dangerouslySetInnerHTML={{ __html: html }}></li> : null}
        </>
      );
    }
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