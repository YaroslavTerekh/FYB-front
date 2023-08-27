import { REMOVE_TOKEN, SET_TOKEN, SET_USER } from './user-actions';
import type { BaseUserModel } from '../../models/user-models/base-user-model';

export type a ={
    q : string
}

const initialState: BaseUserModel = {
    email: "",
    firstName: "",
    password: "",
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
