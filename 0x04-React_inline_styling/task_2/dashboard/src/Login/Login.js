import React from "react";
import {StyleSheet, css} from "aphrodite";

export default function Login() {
    return (
        <React.Fragment>
          <div className={css(styles.login)}>
            <p>Login to access the full dashboard</p>
            <label htmlFor="email">Email</label>
            <input id="email" type="email"/>
            <label htmlFor="password">Password</label>
            <input id="password" type="password"/>
            <button>OK</button>
          </div>
        </React.Fragment>
    );
}

const styles = StyleSheet.create({
  login: {
    minHeight: '30vh',
    paddingTop: '1.5em',
    paddingLeft: '1.5em'
  }
});