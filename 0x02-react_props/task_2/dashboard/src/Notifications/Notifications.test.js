import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('<Notifications />', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper).toBeDefined();
    });
    it('renders 3 NotificationItem items', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.find('NotificationItem')).toHaveLength(3);
    });
    it('renders the text "Here is the list of notifications"', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.contains('<p>Here is the list of notifications</p>')).toBeDefined();
    });
    it('check if NotificationItem renders the right html', () => {
        const wrapper = shallow(<Notifications />);
        const notItem = wrapper.find('NotificationItem');
        expect(notItem.first().html()).toBe(
            '<li data-notification-type="default">New course available</li>'
        );
    });
});