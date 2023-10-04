import React from "react";
import {shallow} from "enzyme";
import NotificationItem from "./NotificationItem";
import { StyleSheetTestUtils } from "aphrodite";

describe("tests for <NotficationItem />", () => {
    beforeAll(() => {
        StyleSheetTestUtils.suppressStyleInjection();
      });
      afterAll(() => {
        StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
      });
    it("renders without crashing", () => {
        const wrapper = shallow(<NotificationItem />);
        expect(wrapper.exists());
    });
    it("renders correct html when type and value are passed", () => {
        const wrapper = shallow(<NotificationItem type="default" value="test" />);
        expect(wrapper.find('li').text()).toEqual('test');
        expect(wrapper.find('li').props()['data-notification-type']).toEqual('default');
    });
});

describe("onclick event behaves as it should", () => {
    beforeAll(() => {
        StyleSheetTestUtils.suppressStyleInjection();
      });
      afterAll(() => {
        StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
      });
    it("should call console.log", () => {
      const wrapper = shallow(<NotificationItem />);
      const spy = jest.fn();
  
      wrapper.setProps({ value: "test item", markAsRead: spy, id: 1 });
      wrapper.find("li").props().onClick();
      expect(spy).toBeCalledTimes(1);
      expect(spy).toBeCalledWith(1);
      spy.mockRestore();
    });
  });