import React from "react";
import {shallow} from "enzyme";
import NotificationItem from "./NotificationItem";

describe("tests for <NotficationItem />", () => {
    it("renders without crashing", () => {
        const wrapper = shallow(<NotificationItem />);
        expect(wrapper.exists());
    });
    it("renders correct html when type and value are passed", () => {
        const wrapper = shallow(<NotificationItem type="default" value="test" />);
        expect(wrapper.find('li').text()).toEqual('test');
        expect(wrapper.find('li').props()['data-notification-type']).toEqual('default');
    });
    it("renders correct html after passing dummy html prop", () => {
        const wrapper = shallow(<NotificationItem html={{ __html: '<u>test</u>' }} />);
        expect(wrapper.find('li').html()).toEqual('<li data-notification-type="default"><u>test</u></li>');
    });
});

describe("onclick event behaves as it should", () => {
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