import type { BaseUserModel } from '../../models/user-models/base-user-model';
import { CoachModel } from '../../models/coach-models/coach-model';
import { SET_COACHES, SET_COACHING, SET_FEEDBACKS } from './admin-actions';
import { FeedbackModel } from '../../models/feedbacks-models/feedback-model';
import type { CoachingModel } from '../../models/coaching-models/coaching-model';

export type AdminContextStateModel = {
    coaches: CoachModel[];
    feedbacks: FeedbackModel[];
    coaching: CoachingModel[];
}

const initialState: AdminContextStateModel = {
    coaches: [],
    feedbacks: [],
    coaching: []
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
        case SET_COACHING:
            return {
                ...state,
                coaching: action.payload
            };
        default:
            return state;
    }
}

export default adminReducer;
