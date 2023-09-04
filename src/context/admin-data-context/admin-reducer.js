import type { BaseUserModel } from '../../models/user-models/base-user-model';
import { CoachModel } from '../../models/coach-models/coach-model';
import { SET_COACHES, SET_COACHING, SET_FEEDBACKS, SET_FOOD } from './admin-actions';
import { FeedbackModel } from '../../models/feedbacks-models/feedback-model';
import type { CoachingModel } from '../../models/coaching-models/coaching-model';
import type { FoodModel } from '../../models/food-models/food-model';

export type AdminContextStateModel = {
    coaches: CoachModel[];
    feedbacks: FeedbackModel[];
    coaching: CoachingModel[];
    food: FoodModel[];
}

const initialState: AdminContextStateModel = {
    coaches: [],
    feedbacks: [],
    coaching: [],
    food: []
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
        case SET_FOOD:
            return {
                ...state,
                food: action.payload
            };
        default:
            return state;
    }
}

export default adminReducer;
