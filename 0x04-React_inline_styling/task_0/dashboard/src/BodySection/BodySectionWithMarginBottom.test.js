import React from "react";
import {shallow} from "enzyme";
import BodySectionWithMarginBottom from "./BodySectionWithMarginBottom";

describe("<BodySectionWithMarginBottom />", () => {
    it("render correctly a BodySection", () => {
      const wrapper = shallow(<BodySectionWithMarginBottom title="test title" />);
      expect(wrapper.exists());
      expect(wrapper.find('BodySection')).toHaveLength(1);
      expect(wrapper.find('BodySection').html()).toEqual('<div class="bodySection"><h2>test title</h2></div>');
    });
  });