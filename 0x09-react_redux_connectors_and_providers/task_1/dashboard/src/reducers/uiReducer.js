import { LOGIN, 
         LOGOUT,
         DISPLAY_NOTIFICATION_DRAWER,
         HIDE_NOTIFICATION_DRAWER,
         LOGIN_FAILURE,
         LOGIN_SUCCESS} from "../actions/uiActionTypes";
import { Map } from "immutable";

const uiState = Map( {
    isNotificationDrawerVisible: false,
    isUserLoggedIn: false,
    user: {}
});

export const uiReducer = (state = uiState, action) => {
    switch (action.type) {
        case DISPLAY_NOTIFICATION_DRAWER: {
            return uiState.set('isNotificationDrawerVisible', true);
        }
        case HIDE_NOTIFICATION_DRAWER: {
            return uiState.set('isNotificationDrawerVisible', false);
        }
        case LOGIN_SUCCESS: {
            return uiState.set('isUserLoggedIn', true);
        }
        case LOGIN_FAILURE: {
            return uiState.set('isUserLoggedIn', false);
        }
        case LOGOUT: {
            return uiState.set('isUserLoggedIn', false);
        }
        default: {
            return state
        }
    }
}