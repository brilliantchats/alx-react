import React from "react";
import PropTypes from "prop-types";

export default function CourseListRow(props) {
    const {isHeader = false} = props;
    const {textFirstCell} = props;
    const {textSecondCell = null} = props;

    let tr;

    if (isHeader) {
        if (textSecondCell === null) {
            tr = <th colSpan={2}>{textFirstCell}</th>
        } else {
            tr = (
                <>
                  <th>{textFirstCell}</th>
                  <th>{textSecondCell}</th>
                </>
            )
        }
    } else {
        tr = (
            <>
              <td>{textFirstCell}</td>
              <td>{textSecondCell}</td>
            </>
        )
    }

    return <tr>{tr}</tr>
}

CourseListRow.propTypes = {
    isHeader: PropTypes.bool,
    textFirstCell: PropTypes.string.isRequired,
    textSecondCell: PropTypes.string
};
