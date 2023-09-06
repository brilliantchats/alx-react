import React from "react";
import PropTypes from "prop-types";

export default function CourseListRow({isHeader, textFirstCell, textSecondCell}) {
    let tr;
    const rowColor = {
        backgroundColor: '#f5f5f5ab',
    }
    const headColor = {
        backgroundColor: '#deb5b545',
        textAlign: 'left'
    }
    const text_align = {
        textAlign: 'center',
        backgroundColor: '#deb5b545'
    }
    if (isHeader) {
        if (textSecondCell) {
            tr =
              <tr style={headColor}>
                <th>{textFirstCell}</th>
                <th>{textSecondCell}</th>
              </tr>
        } else {
            tr = <tr style={text_align}><th colSpan='2'>{textFirstCell}</th></tr>
        }
    } else {
        tr =
          <tr style={rowColor}>
            <td>{textFirstCell}</td>
            <td>{textSecondCell}</td>
          </tr>
    }

    return (
        tr
    );
}

CourseListRow.defaultProps = {
    isHeader: false,
    textSecondCell: null
}

CourseListRow.propTypes = {
    isHeader: PropTypes.bool,
    textFirstCell: PropTypes.string.isRequired,
    textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}