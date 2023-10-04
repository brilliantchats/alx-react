import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from "./uiActionTypes";
import { login, logout, displayNotificationDrawer, hideNotificationDrawer } from "./uiActionCreators";

describe("tests for ui actions", () => {
    it("test login", () => {
        const user = {email: 'bz@gmail.com', password: '12345'};
        expect(login(user.email, user.password)).toEqual({type: LOGIN, user: user});
    });
    it("test logout", () => {
        expect(logout()).toEqual({type: LOGOUT});
    });
    it("test displayNotificationDrawer", () => {
        expect(displayNotificationDrawer()).toEqual({type: DISPLAY_NOTIFICATION_DRAWER});
    });
    it("test hideNotificationDrawer", () => {
        expect(hideNotificationDrawer()).toEqual({type: HIDE_NOTIFICATION_DRAWER});
    });
});