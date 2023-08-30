import React from 'react';
import "./App.css";
import Header from "../Header/Header";
import Notifications from "../Notifications/Notifications";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import CourseList from "../CourseList/CourseList";
import PropTypes from "prop-types";

function App({isLoggedIn}) {
  return (
    <>
      <div id="root-notifications">
        <Notifications />
      </div>
      <div>
        <Header />
        {isLoggedIn ? (
          <CourseList />
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
