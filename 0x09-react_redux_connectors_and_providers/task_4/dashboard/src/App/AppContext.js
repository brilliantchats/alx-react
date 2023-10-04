import React from "react";

export const user = {
    email: '',
    password: '',
    isLoggedIn: false
};
export function logOut() {};

export const AppContext = React.createContext({
    user: user,
    logOut: logOut
});