import React from "react";
import holberton_logo from "../assets/holberton-logo.jpg";
import {StyleSheet, css} from "aphrodite";
import { AppContext } from "../App/AppContext";

export default class Header extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {user, logOut} = this.context;
        return (
            <>
            <div className={css(styles.header)}>
                <img src={holberton_logo} alt="" className={css(styles.image)}/>
                <h1>School dashboard</h1>
          </div>
          {user.isLoggedIn &&
          <section id="logoutSection">
            Welcome {user.email} <a onClick={logOut} href="">(logout)</a>
          </section>}
          </>
        );
    }
}

Header.contextType = AppContext;

const styles = StyleSheet.create({
    header: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        fontFamily: 'sans-serif',
        color: '#c4372d',
        borderBottom: '2px solid #c4372d'
    },
    image: {
        width: '32vh',
        height: '32vh'
    }
});