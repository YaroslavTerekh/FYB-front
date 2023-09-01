import type { BaseUserModel } from '../../models/user-models/base-user-model';
import { CoachModel } from '../../models/admin-models/coach-model';
import { SET_COACHES } from './admin-actions';

export type AdminContextStateModel = {
    coaches: CoachModel[];
}

const initialState: AdminContextStateModel = {
    coaches: []
};

function adminReducer(state = initialState, action): AdminContextStateModel {
    switch(action.type) {
        case SET_COACHES:
            return {
                ...state,
                coaches: action.payload
            };
        default:
            return state;
    }
}
export default adminReducer;
