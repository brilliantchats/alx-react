import React from "react";
import {shallow} from "enzyme";
import Login from "./Login";

describe("tests for <Login />", () => {
    it("renders without crashing", () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.exists());
    });
    it("renders 2 input tags and 2 labels", () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.find('input')).toHaveLength(2);
        expect(wrapper.find('label')).toHaveLength(2);
    });
});