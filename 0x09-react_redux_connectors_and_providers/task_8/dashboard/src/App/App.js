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
import {connect} from "react-redux";
import {displayNotificationDrawer, hideNotificationDrawer} from "../actions/uiActionCreators";
import { loginRequest as login, logout } from "../actions/uiActionCreators";

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
      listNotifications: listNotifications
    };
    this.handleKeypress = this.handleKeypress.bind(this);
    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
    this.markNotificationAsRead = this.markNotificationAsRead.bind(this);
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
      this.props.logout();
    }
  }
  markNotificationAsRead(id) {
    this.setState({
      listNotifications: this.state.listNotifications.filter(user => user.id !== id)
    });
  }
  render() {
    let user = this.state.user;
    let logOut = this.state.logOut;
    return (
      <AppContext.Provider value={{user, logOut}}>
          <Notifications 
            listNotifications={this.state.listNotifications}
            displayDrawer={this.props.displayDrawer}
            handleDisplayDrawer={this.props.displayNotificationDrawer}
            handleHideDrawer={this.props.hideNotificationDrawer}
            markNotificationAsRead={this.markNotificationAsRead}
          />
          <div>
            <Header />
            {this.props.isLoggedIn ?
              <BodySectionWithMarginBottom title="Course List">
                <CourseList listCourses={listCourses}/> 
              </BodySectionWithMarginBottom>
              : 
              <BodySectionWithMarginBottom title="Log in to continue">
                <Login logIn={this.props.login}/> 
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
  isLoggedIn: false,
  displayDrawer: false,
  displayNotificationDrawer: () => {},
  hideNotificationDrawer: () => {},
  login: () => {},
}
App.propTypes = {
  isLoggedIn: PropTypes.bool,
  displayDrawer: PropTypes.bool,
  displayNotificationDrawer: PropTypes.func,
  hideNotificationDrawer: PropTypes.func,
  login: PropTypes.func,
}

const styles = StyleSheet.create({
  footer: {
    textAlign: 'center',
    fontStyle: 'italic',
    borderTop: '2px solid #c4372d'
  }
});

export const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.get('isUserLoggedIn'),
    displayDrawer: state.get('isNotificationDrawerVisible')
  }
};

const mapDispatchToProps = {
  displayNotificationDrawer,
  hideNotificationDrawer,
  login,
  logout 
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

//export default App;
