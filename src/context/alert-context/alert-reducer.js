import { REMOVE_ALERT, SET_ALERT } from './alert-actions';
import { object } from 'prop-types';

const initialState = [];

function alertReducer(state = initialState, action) {
    switch(action.type) {
        case SET_ALERT:
            const newList = [...state];
            newList.push(action.payload);
            return newList;
        case REMOVE_ALERT:
            const removeList = [...state];
            removeList.shift();
            return [...removeList];
        default:
            return state;
    }
}
export default alertReducer;
