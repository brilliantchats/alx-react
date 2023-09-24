import React from "react";
import Notifications from "../Notifications/Notifications";
import Login from "../Login/Login";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import CourseList from "../CourseList/CourseList";
import PropTypes from "prop-types";
import { getLatestNotification } from "../utils/utils";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom";
import BodySection from "../BodySection/BodySection";
import {StyleSheet, css} from "aphrodite";
import { AppContext, user, logOut } from "./AppContext";

const listCourses = [
  {id: 1, name: 'ES6', credit: 60},
  {id: 2, name: 'Webpack', credit: 20},
  {id: 3, name: 'React', credit: 40}
];
const listNotifications = [
  {id: 1, type: 'default', value: 'New course available'},
  {id: 2, type: 'urgent', value: 'New resume available'},
  {id: 3, type: 'urgent', html: {__html: getLatestNotification()}}
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayDrawer: false,
      user: user,
      logOut: logOut
    };
    this.handleKeypress = this.handleKeypress.bind(this);
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
  }
  componentDidMount(){
    document.addEventListener("keydown", this.handleKeypress);
  }
  componentWillUnmount(){
    document.removeEventListener("keydown", this.handleKeypress)
  }
  handleKeypress(event) {
    if(event.ctrlKey && event.key === "h"){
      event.preventDefault();
      alert("Logging you out");
      this.props.logOut();
    }
  }
  handleDisplayDrawer() {
    this.setState({
      displayDrawer: true
    }
    );
  }
  handleHideDrawer() {
    this.setState({
      displayDrawer: false
    });
  }
  logIn(email, password) {
    this.setState({
      user: {
        email: email,
        password: password,
        isLoggedIn: true
      }
    });
  }
  logOut() {
    this.setState({
      user: user
    });
  }
  render() {
    let user = this.state.user;
    let logOut = this.state.logOut;
    return (
      <AppContext.Provider value={{user, logOut}}>
          <Notifications 
            listNotifications={listNotifications}
            displayDrawer={this.state.displayDrawer}
            handleDisplayDrawer={this.handleDisplayDrawer}
            handleHideDrawer={this.handleHideDrawer}
          />
          <div>
            <Header />
            {this.state.user.isLoggedIn ?
              <BodySectionWithMarginBottom title="Course List">
                <CourseList listCourses={listCourses}/> 
              </BodySectionWithMarginBottom>
              : 
              <BodySectionWithMarginBottom title="Log in to continue">
                <Login logIn={this.logIn}/> 
              </BodySectionWithMarginBottom>}
            <BodySection title="News from the School">
              <p>Random Lorem Ipsum text</p>
            </BodySection>
            <div className={css(styles.footer)}>
              <Footer />
            </div>
          </div>
      </AppContext.Provider>
  );
  }
}

App.defaultProps = {
}
App.propTypes = {
}

const styles = StyleSheet.create({
  footer: {
    textAlign: 'center',
    fontStyle: 'italic',
    borderTop: '2px solid #c4372d'
  }
});

export default App;
