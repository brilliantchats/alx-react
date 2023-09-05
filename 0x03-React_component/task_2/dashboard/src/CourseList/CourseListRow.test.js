import React from "react";
import { shallow } from "enzyme";
import CourseListRow from "./CourseListRow.JS";

describe("<CourseListRow />", () => {
    it("checks if there is one cell rendered with colSpan of 2", () => {
        const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell='text' />);
        const th = wrapper.find('th');
        expect(th).toHaveLength(1);
        expect(th.prop('colSpan')).toEqual(2);
    });
    it("checks if 2 cells are rendered when textSecondCell is present", () => {
        const wrapper = shallow(
            <CourseListRow 
              isHeader={true}
              textFirstCell="text"
              textSecondCell="second"
            />
        );
        const th = wrapper.find('th');
        expect(th).toHaveLength(2);
    });
    it("checks when isHeader is false", () => {
        const wrapper = shallow(
            <CourseListRow 
              isHeader={false}
              textFirstCell="rire"
              textSecondCell="pull"
            />
        );
        const tr = wrapper.find('tr');
        expect(tr).toHaveLength(1);
        expect(tr.children('td')).toHaveLength(2);
    });
})