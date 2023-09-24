import React from "react";
import {StyleSheet, css} from "aphrodite";

export default function Login() {
    return (
        <React.Fragment>
          <div className={css(styles.login)}>
            <p>Login to access the full dashboard</p>
            <label htmlFor="email" className={css(styles.responsive)}>
              Email<input id="email" type="email"/>
            </label>
            <label htmlFor="password" className={css(styles.responsive)}>
              Password<input id="password" type="password"/>
            </label>
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
  },
  responsive: {
    '@media (max-width: 900px)': {
      display: 'block'
    }
  }
});