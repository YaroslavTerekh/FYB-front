import type { BaseUserModel } from '../../models/user-models/base-user-model';
import type { CoachModel } from '../../models/admin-models/coach-model';

export const SET_COACHES = 'SET_COACHES';
export const REMOVE_TOKEN = 'REMOVE_TOKEN';
export const SET_TOKEN = 'SET_TOKEN';


export const setCoaches = (coaches: CoachModel[]) => {
    return {
        type: SET_COACHES,
        payload: coaches,
    };
};
