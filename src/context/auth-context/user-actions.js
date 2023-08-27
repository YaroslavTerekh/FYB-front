import type { BaseUserModel } from '../../models/user-models/base-user-model';

export const SET_USER = 'SET_USER';
export const REMOVE_TOKEN = 'REMOVE_TOKEN';
export const SET_TOKEN = 'SET_TOKEN';


export const setUser = (user: BaseUserModel) => {
    return {
        type: SET_USER,
        payload: user,
    };
};

export const removeToken = () => {
    return {
        type: REMOVE_TOKEN,
        payload: "",
    };
};

export const setToken = (value: string) => {
    return {
        type: SET_TOKEN,
        payload: value,
    };
};
