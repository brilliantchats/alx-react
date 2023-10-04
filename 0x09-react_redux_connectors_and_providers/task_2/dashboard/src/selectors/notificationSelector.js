import {Map} from "immutable";

export const filterTypeSelected = state => state.filter;
export const getNotifications = state => Map(state.notifications);
export const getUnreadNotifications = state => {
    const unreadNotifications = state.notifications.filter(item => {
        if (item.isRead === false){
            return item;
        }
    });
    return Map(unreadNotifications);
};