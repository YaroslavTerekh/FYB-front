import type { BaseUserModel } from '../../models/user-models/base-user-model';
import { CoachModel } from '../../models/coach-models/coach-model';
import { SET_COACHES, SET_FEEDBACKS } from './admin-actions';
import { FeedbackModel } from '../../models/feedbacks-models/feedback-model';

export type AdminContextStateModel = {
    coaches: CoachModel[];
    feedbacks: FeedbackModel[];
}

const initialState: AdminContextStateModel = {
    coaches: [],
    feedbacks: []
};

function adminReducer(state = initialState, action): AdminContextStateModel {
    switch(action.type) {
        case SET_COACHES:
            return {
                ...state,
                coaches: action.payload
            };
        case SET_FEEDBACKS:
            return {
                ...state,
                feedbacks: action.payload
            };
        default:
            return state;
    }
}

export default adminReducer;
