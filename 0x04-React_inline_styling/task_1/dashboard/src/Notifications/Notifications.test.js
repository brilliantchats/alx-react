import React from "react";
import Notifications from "./Notifications";
import {shallow} from "enzyme";
import {getLatestNotification} from "../utils/utils";
import { StyleSheetTestUtils } from "aphrodite";

describe('<Notification />', () => {
  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });
  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });
    it('renders without crashing', () => {
      const wrapper = shallow(<Notifications />);
      expect(wrapper.exists());
    });
  
    it('Notification Item with html', () => {
      const wrapper = shallow(<Notifications displayDrawer={true} />);
      const nItem = wrapper.find('NotificationItem');
      expect(nItem).toBeDefined();
    });
 
    it('Notification with displayDrawer false', () => {
      const wrapper = shallow(<Notifications />);
      const dNoti = wrapper.find('div.Notifications');
      expect(dNoti).toHaveLength(0);
    });

  });

  describe('listNotifications with values', () => {
    beforeAll(() => {
      StyleSheetTestUtils.suppressStyleInjection();
    });
    afterAll(() => {
      StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
    });
    let latestNotification = undefined;
    let listNotifications = undefined;
  
    beforeEach(() => {
      latestNotification = getLatestNotification();
      listNotifications = [
        { id: 1, type: 'default', value: 'New course available' },
        { id: 2, type: 'urgent', value: 'New resume available' },
        { id: 3, type: 'urgent', html: { __html: latestNotification } },
      ];
    });
  
    it('values', () => {
      const wrapper = shallow(
        <Notifications displayDrawer={true} listNotifications={listNotifications} />
      );
      expect(wrapper.exists());
      const nItem = wrapper.find('NotificationItem');
      expect(nItem).toBeDefined();
      expect(nItem).toHaveLength(3);

      expect(nItem.at(0).html()).toEqual(
        '<li data-notification-type="default">New course available</li>'
      );
      expect(nItem.at(1).html()).toEqual(
        '<li data-notification-type="urgent">New resume available</li>'
      );
      expect(nItem.at(2).html()).toEqual(
        `<li data-notification-type="urgent">${latestNotification}</li>`
      );
    });
  });

  describe('listNotifications without values', () => {
    beforeAll(() => {
      StyleSheetTestUtils.suppressStyleInjection();
    });
    afterAll(() => {
      StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
    });
    let listNotifications = undefined;
    beforeEach(() => {
      listNotifications = [];
    });
  
    it('empty', () => {
      const wrapper = shallow(
        <Notifications displayDrawer listNotifications={listNotifications} />
      );
      expect(wrapper.exists());
      const nItem = wrapper.find('NotificationItem');
      expect(nItem).toHaveLength(1);
      expect(nItem.html()).toEqual(
        '<li data-notification-type="default">No new notification for now</li>'
      );
    });
  
    it('without listNotifications', () => {
      const wrapper = shallow(<Notifications displayDrawer />);
      const nItem = wrapper.find('NotificationItem');
      expect(nItem).toHaveLength(1);
      expect(nItem.html()).toEqual(
        '<li data-notification-type="default">No new notification for now</li>'
      );
    });
  });

  describe("mockup console.log", () =>{
    const wrapper = shallow(<Notifications />);
    const consoleLog = jest.spyOn(console, 'log');
    wrapper.instance().markAsRead(3);
    expect(consoleLog).toHaveBeenCalledWith('Notification 3 has been marked as read');
    consoleLog.mockRestore();
  });