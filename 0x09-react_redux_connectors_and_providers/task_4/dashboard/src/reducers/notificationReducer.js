import { MARK_AS_READ,
         FETCH_NOTIFICATIONS_SUCCESS,
         SET_TYPE_FILTER } from "../actions/notificationActionTypes";
import { notificationsNormalizer } from "../schema/notifications";
import {Map} from "immutable";

const notificationState = {
    notifications: [],
    filter: "DEFAULT"
};
export const notificationReducer = (state = Map(notificationState), action) => {
    switch (action.type) {
        case FETCH_NOTIFICATIONS_SUCCESS: {
            const normalizedData = notificationsNormalizer(action.data);
            Object.keys(normalizedData.notifications).map((key) => {
                normalizedData.notifications[key].isRead = false;
              });
              return state.merge(normalizedData);
        }
        case MARK_AS_READ: {
            return state.setIn(
                ['notifications', String(action.index), 'isRead'],
                true
              );
        }
        case SET_TYPE_FILTER: {
            return state.set('filter', action.filter);
        }
    }
}