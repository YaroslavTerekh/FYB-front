import { REMOVE_spinner, REMOVE_spinner_User, SET_spinner, SET_spinner_User } from './spinner-actions';

const initialState = { show: false, user: false };

function spinnerReducer(state = initialState, action) {
    switch(action.type) {
        case SET_spinner:
            return { show: true, user: false };
        case REMOVE_spinner:
            return { show: false, user: false };
        case SET_spinner_User:
            return { show: true, user: true };
        case REMOVE_spinner_User:
            return { show: false, user: true };
        default:
            return state;
    }
}
export default spinnerReducer;
