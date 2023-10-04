import React from "react";
import {shallow} from "enzyme";
import Header from "./Header";
import { StyleSheetTestUtils } from "aphrodite";

describe("tests for <Header />", () => {
    beforeAll(() => {
        StyleSheetTestUtils.suppressStyleInjection();
      });
      afterAll(() => {
        StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
      });
    it("renders without crashing", () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.exists());
    });
    it("renders img and h1", () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.find('img')).toHaveLength(1);
        expect(wrapper.find('h1')).toHaveLength(1);
    });
});