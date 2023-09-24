import React from "react";
import BodySection from "./BodySection";
import PropTypes from "prop-types";
import {StyleSheet, css} from "aphrodite";

class BodySectionWithMarginBottom extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className={css(styles.margin)}>
                <BodySection {...this.props}/>
            </div>
        );
    }
}

BodySectionWithMarginBottom.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
}

const styles = StyleSheet.create({
    margin: {
        marginBottom: '40px',
    }
});

export default BodySectionWithMarginBottom;