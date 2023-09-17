import { REMOVE_ALERT, REMOVE_TOKEN, SET_ALERT, SET_TOKEN, SET_USER } from './alert-actions';
import type { BaseUserModel } from '../../models/user-models/base-user-model';

const initialState = [];

function alertReducer(state = initialState, action) {
    switch(action.type) {
        case SET_ALERT:
            return [...initialState, action.payload];
        case REMOVE_ALERT:
            return [...initialState.shift()];
        default:
            return state;
    }
}
export default alertReducer;
