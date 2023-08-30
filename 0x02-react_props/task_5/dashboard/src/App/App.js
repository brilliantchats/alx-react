import React from 'react';
import Header from "../Header/Header";
import Notifications from "../Notifications/Notifications";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import CourseList from "../CourseList/CourseList";
import PropTypes from "prop-types";
import {getLatestNotification} from "../utils/utils";

function App({isLoggedIn}) {
  const listCourses = [
    { id: 1, name: 'ES6', credit: 60 },
    { id: 2, name: 'Webpack', credit: 20 },
    { id: 3, name: 'React', credit: 40 },
  ];
  const listNotifications = [
    { id: 1, type: 'default', value: 'New course available' },
    { id: 2, type: 'urgent', value: 'New resume available' },
    { id: 3, type: 'urgent', html: { __html: getLatestNotification() } },
  ];
  return (
    <>
      <div id="root-notifications">
        <Notifications listNotifications={listNotifications} />
      </div>
      <div>
        <Header />
        {isLoggedIn ? (
          <CourseList listCourses={listCourses}/>
        ) : (
          <Login />
        )}
        <Footer />
      </div>
    </>
  );
}

export default App

App.defaultProps = {
  isLoggedIn: false
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};
