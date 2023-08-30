import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('<Notifications />', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper).toBeDefined();
    });
    it('renders 3 NotificationItem items', () => {
        const wrapper = shallow(<Notifications displayDrawer={true} />);
        expect(wrapper.find('NotificationItem')).toHaveLength(3);
    });
    it('renders the text "Here is the list of notifications"', () => {
        const wrapper = shallow(<Notifications displayDrawer={true}/>);
        expect(wrapper.contains('<p>Here is the list of notifications</p>')).toBeDefined();
    });
    it('check if NotificationItem renders the right html', () => {
        const wrapper = shallow(<Notifications displayDrawer={true}/>);
        const notItem = wrapper.find('NotificationItem');
        expect(notItem.first().html()).toBe(
            '<li data-notification-type="default">New course available</li>'
        );
    });
    it("checks when displayDrawer is false", () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.find('.menuItem').exists());
        expect(wrapper.find('.Notifications')).toHaveLength(0);
    });
    it("checks when displayDrawer is true", () => {
        const wrapper = shallow(<Notifications displayDrawer={true} />);
        expect(wrapper.find('.menuItem').exists());
        expect(wrapper.find('.Notifications').exists());
    });
});