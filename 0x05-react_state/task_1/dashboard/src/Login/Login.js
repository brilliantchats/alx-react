import React from "react";
import {StyleSheet, css} from "aphrodite";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      email: '',
      password: '',
      enableSubmit: false
    };
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
  }
  handleLoginSubmit(event) {
    this.setState({isLoggedIn: true});
    alert('Submit');
    event.preventDefault();
  }
  handleChangeEmail(event) {
    this.setState({email: event.target.value});
    {this.state.password && this.setState({enableSubmit: true})};
  }
  handleChangePassword(event) {
    this.setState({password: event.target.value});
    {this.state.email && this.setState({enableSubmit: true})};
  }
  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleLoginSubmit}>
          <div className={css(styles.login)}>
            <p>Login to access the full dashboard</p>
            <label htmlFor="email">Email</label>
            <input 
              id="email"
              type="email"
              value={this.state.email}
              onChange={this.handleChangeEmail}/>
            <label htmlFor="password">Password</label>
            <input 
              id="password"
              type="password"
              value={this.state.password}
              onChange={this.handleChangePassword}/>
            {this.state.enableSubmit ?
            <input type="submit"/>:
            <input type="submit" disabled/>}
          </div>
        </form>
      </React.Fragment>
  );
  }
}

const styles = StyleSheet.create({
  login: {
    minHeight: '30vh',
    paddingTop: '1.5em',
    paddingLeft: '1.5em'
  }
});