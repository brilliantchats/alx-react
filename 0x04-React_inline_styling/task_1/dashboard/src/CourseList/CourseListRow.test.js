import React from "react";
import {shallow} from "enzyme";
import CourseListRow from "./CourseListRow";

describe("tests for <CourseListRow />", () => {
    it("checks when isHeader is true", () => {
        const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="you"/>);
        expect(wrapper.find('th')).toHaveLength(1);
        expect(wrapper.find('th').props().colSpan).toEqual('2');
    });
    it("checks when isHeader is true and textSecondCell is passed", () => {
        const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="tes" textSecondCell="a table" />);
        expect(wrapper.find('th')).toHaveLength(2);
    });
    it("checks when isHeader is false", () => {
        const wrapper = shallow(
            <CourseListRow isHeader={false} textFirstCell="yes" textSecondCell="right" />
        );
        expect(wrapper.find('td')).toHaveLength(2);
    });
});