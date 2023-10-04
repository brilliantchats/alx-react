import React from "react";
import CourseListRow from "./CourseListRow";
import CourseShape from "./CourseShape";
import PropTypes from "prop-types";
import {StyleSheet, css} from "aphrodite";

export default function CourseList({listCourses}) {
    return (
        <table className={css(styles.table)}>
            <thead>
                <CourseListRow isHeader={true} textFirstCell="Available courses" />
                <CourseListRow isHeader={true} textFirstCell="Course name" textSecondCell="Credit"/>
            </thead>
            <tbody>
                {listCourses.length === 0 && (
                    <CourseListRow isHeader={false} textFirstCell="No course available yet"/>
                )}
                {listCourses.map((course) => {
                    return <CourseListRow 
                              key={course.id}
                              isHeader={false}
                              textFirstCell={course.name}
                              textSecondCell={course.credit}/>
                    
                })}
            </tbody>
        </table>
    );
}

const styles = StyleSheet.create({
    table: {
        marginTop: '2rem',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '95%',
        border: '1px solid #fff',
        borderCollapse: 'collapse'
    }
});

CourseList.defaultProps = {
    listCourses: []
}

CourseList.propTypes = {
    listCourses: PropTypes.arrayOf(CourseShape)
}