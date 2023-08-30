import React from 'react';
import {shallow} from 'enzyme';
import App from './App';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';

describe('<App />', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<App />);
        expect(wrapper).toBeDefined();
    });
    it('renders Notifications', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.contains(<Notifications />)).toBeDefined();
    });
    it('renders Header', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.contains(<Header />)).toBeDefined();
    });
    it('renders Login', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.contains(<Login />)).toBeDefined();
    });
    it('renders Footer', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.contains(<Footer />)).toBeDefined();
    });
    it("check that CourseList is not displayed by default", () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('CourseList')).toHaveLength(0);
    });
    it("checks when isLoggedIn is true", () => {
        const wrapper = shallow(<App isLoggedIn={true}/>);
        expect(wrapper.find('Login')).toHaveLength(0);
        expect(wrapper.find('CourseList').exists());

    });
});