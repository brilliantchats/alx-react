import React from "react";
import "./App.css";
import Notifications from "../Notifications/Notifications";
import Login from "../Login/Login";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import CourseList from "../CourseList/CourseList";
import PropTypes from "prop-types";
import { getLatestNotification } from "../utils/utils";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom";
import BodySection from "../BodySection/BodySection";

const listCourses = [
  {id: 1, name: 'ES6', credit: 60},
  {id: 2, name: 'Webpack', credit: 20},
  {id: 3, name: 'React', credit: 40}
];
const listNotifications = [
  {id: 1, type: 'default', value: 'New course available'},
  {id: 2, type: 'urgent', value: 'New resume available'},
  {id: 3, type: 'urgent', html: {__html: getLatestNotification()}}
]

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleKeypress = this.handleKeypress.bind(this);
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
  render() {
    return (
    <React.Fragment>
      <Notifications listNotifications={listNotifications}/>
      <div>
        <Header />
        {this.props.isLoggedIn ?
          <BodySectionWithMarginBottom title="Course List">
            <CourseList listCourses={listCourses}/> 
          </BodySectionWithMarginBottom>
          : 
          <BodySectionWithMarginBottom title="Log in to continue">
            <Login /> 
          </BodySectionWithMarginBottom>}
        <BodySection title="News from the School">
          <p>Random Lorem Ipsum text</p>
        </BodySection>
        <Footer />
      </div>
    </React.Fragment>
  );
  }
}

App.defaultProps = {
  isLoggedIn: false,
  logOut: function(){return}
}
App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func
}

export default App;
