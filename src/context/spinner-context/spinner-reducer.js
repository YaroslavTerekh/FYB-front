import { REMOVE_spinner, SET_spinner } from './spinner-actions';

const initialState = { show: false };

function spinnerReducer(state = initialState, action) {
    switch(action.type) {
        case SET_spinner:
            return { show: true };
        case REMOVE_spinner:
            return { show: false };
        default:
            return state;
    }
}
export default spinnerReducer;
