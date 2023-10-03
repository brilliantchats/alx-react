import React from "react";
import {shallow} from "enzyme";
import Footer from "./Footer";

describe("tests for <Footer />", () => {
    it("renders without crashing", () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper.exists());
    });
    it("renders text", () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper.find('p').text()).toContain("Copyright");
    });
});