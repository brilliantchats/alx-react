import React from "react";
import { getFooterCopy, getFullYear } from "../utils/utils";
import {AppContext} from "../App/AppContext";

export default function Footer() {
    return (
      <AppContext.Consumer>
        {({user, logOut}) => (
          <footer>
            <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
            {user.isLoggedIn &&
            <p><a href="">Contact us</a></p>}
          </footer>
        )}
      </AppContext.Consumer>
    );
}