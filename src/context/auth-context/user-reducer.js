import { REMOVE_TOKEN, SET_TOKEN, SET_USER } from './user-actions';
import type { BaseUserModel } from '../../models/user-models/base-user-model';

const initialState: BaseUserModel = {
    email: "",
    firstName: "",
    phoneNumber: "",
    token: "",
};

function userReducer(state = initialState, action): BaseUserModel {
    switch(action.type) {
        case SET_USER:
            return {
                ...state,
                ...action.payload
            };
        case SET_TOKEN:
            return {
                ...state,
                token: action.payload
            };
        case REMOVE_TOKEN:
            return {
                ...state,
                token: undefined
            };
        default:
            return state;
    }
}
export default userReducer;
