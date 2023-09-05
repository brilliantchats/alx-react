/**
 * @jest-environment jsdom
 */

import React from "react";
import App from "./App";
import {shallow, mount} from "enzyme";

describe("test <App />", () => {
    it("renders without crashing", () => {
        const wrapper = shallow(<App />);
        expect(wrapper.exists()).toBeDefined();
    });
    it("renders Notifications component", () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('Notifications')).toHaveLength(1);
    });
    it("renders Header component", () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('Header')).toHaveLength(1);
    });
    it("renders Login component", () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('Login')).toHaveLength(1);
    });
    it("renders Footer component", () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('Footer')).toHaveLength(1);
    });
    it("check if CourseList is not displayed by default", () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('CourseList')).toHaveLength(0);
    });
    it("checks when isLoggedIn is true", () => {
        const wrapper =shallow(<App isLoggedIn={true} />);
        expect(wrapper.find('Login')).toHaveLength(0);
        expect(wrapper.find('CourseList')).toHaveLength(1);
    });
});

describe("tests when ctrl + h are pressed together", () => {
    it("checks to see if logOut function is called", () => {
        const logOut = jest.fn();
        const wrapper = mount(<App logOut={logOut} />);
        const event = new KeyboardEvent("keydown", {ctrlKey: true, key: "h"});
        document.dispatchEvent(event);
        expect(logOut).toHaveBeenCalled();
        wrapper.unmount();
    });
    document.alert = jest.fn();
    it("checks if document.alert was called with the right args", () => {
        const wrapper = mount(<App />);
        const alert = jest.spyOn(window, 'alert');
        const event = new KeyboardEvent("keydown", {ctrlKey: true, key: "h"});
        document.dispatchEvent(event);
        expect(alert).toHaveBeenCalledWith("Logging you out");
        jest.restoreAllMocks();
        wrapper.unmount();
    });
    document.alert.mockClear();
});