import { MARK_AS_READ,
         FETCH_NOTIFICATIONS_SUCCESS,
         SET_TYPE_FILTER } from "../actions/notificationActionTypes";

const notificationState = {
    notifications: [],
    filter: "DEFAULT"
};
export const notificationReducer = (state = notificationState, action) => {
    switch (action.type) {
        case FETCH_NOTIFICATIONS_SUCCESS: {
            const data = action.data.map(notification => {
                notification['isRead'] = false;
                return notification;
            });
            return {
                ...state,
                notifications: state.notifications.concat(data)
            };
        }
        case MARK_AS_READ: {
            return {
                ...state,
                notifications: state.notifications.map(notification => {
                    if (action.index === notification.id) {
                        notification.isRead = true;
                        return notification
                    }
                    return notification
                })
            }
        }
        case SET_TYPE_FILTER: {
            return {
                ...state,
                filter: action.filter
            }
        }
    }
}