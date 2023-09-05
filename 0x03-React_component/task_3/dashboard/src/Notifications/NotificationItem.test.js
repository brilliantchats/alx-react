import React from "react";
import { shallow } from "enzyme";
import NotificationItem from "./NotificationItem";

describe("<NotificationItem />", () => {
    it("renders without crashing", () => {
        const wrapper = shallow(<NotificationItem />);
        expect(wrapper).toBeDefined();
    });
    it("renders correct html when dummy props are passed", () => {
        const wrapper = shallow(<NotificationItem type="default" value="test" />);
        expect(wrapper.find('li').text()).toEqual('test');
        expect(wrapper.find('li').prop('data-notification-type')).toEqual('default');
    });
    it("renders correct html when html prop is passed", () => {
        const wrapper = shallow(<NotificationItem html={{ __html: '<u>test</u>' }} />);
        const li = wrapper.find('li');
        expect(li.contains('<u>test</u>')).toBeDefined();
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