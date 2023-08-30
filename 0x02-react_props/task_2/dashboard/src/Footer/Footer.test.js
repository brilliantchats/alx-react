import React from "react";
import { shallow } from "enzyme";
import Footer from "./Footer";

describe("<Footer />", () => {
    it("renders without crashing", () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper).toBeDefined();
    });
    it("at the very least, 'Copyright' is rendered", () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper.find('p').text()).toContain('Copyright');
    })
});