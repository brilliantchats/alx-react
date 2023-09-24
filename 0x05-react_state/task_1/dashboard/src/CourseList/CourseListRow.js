import React from "react";
import PropTypes from "prop-types";
import {StyleSheet, css} from "aphrodite";


export default function CourseListRow({isHeader, textFirstCell, textSecondCell}) {
    let tr;
    const rowColor = {
        backgroundColor: '#f5f5f5ab',
    }
    const headColor = {
        backgroundColor: '#deb5b545',
    }
    if (isHeader) {
        if (textSecondCell) {
            tr =
              <tr style={headColor} className={css(styles.one_th, styles.tr)}>
                <th>{textFirstCell}</th>
                <th>{textSecondCell}</th>
              </tr>
        } else {
            tr = <tr style={headColor} className={css(styles.two_th, styles.tr)}><th colSpan='2'>{textFirstCell}</th></tr>
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

const styles = StyleSheet.create({
    tr: {
        border: '0.5px solid #E0E0E0'
    },
    one_th: {
        textAlign: 'left'
    },
    two_th: {
        textAlign: 'center'
    }
});