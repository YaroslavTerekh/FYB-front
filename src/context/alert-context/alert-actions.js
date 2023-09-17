import type { BaseUserModel } from '../../models/user-models/base-user-model';

export const SET_ALERT = 'SET_ALERT';
export const REMOVE_ALERT = 'REMOVE_ALERT';

export const setAlert = (value: { icon: string, isSuccess: boolean, message: string }) => {
    return {
        type: SET_ALERT,
        payload: value,
    };
};

export const removeAlert = () => {
    return {
        type: REMOVE_ALERT,
        payload: null,
    };
};
