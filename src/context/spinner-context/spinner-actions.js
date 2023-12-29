import type { BaseUserModel } from '../../models/user-models/base-user-model';

export const SET_spinner = 'SET_spinner';
export const REMOVE_spinner = 'REMOVE_spinner';

export const SET_spinner_User = 'SET_spinner_User';
export const REMOVE_spinner_User = 'REMOVE_spinner_User';

export const setSpinner = () => {
    return {
        type: SET_spinner,
        payload: { show: true },
    };
};

export const removeSpinner = () => {
    return {
        type: REMOVE_spinner,
        payload: { show: false },
    };
};

export const setUserSpinner = () => {
    return {
        type: SET_spinner_User,
        payload: { show: true },
    };
};

export const removeUserSpinner = () => {
    return {
        type: REMOVE_spinner_User,
        payload: { show: false },
    };
};
