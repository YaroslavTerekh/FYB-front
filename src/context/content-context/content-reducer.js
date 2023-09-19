import type { BaseUserModel } from '../../models/user-models/base-user-model';
import { CoachModel } from '../../models/coach-models/coach-model';
import {
    SET_CONTENT_COACHES,
    SET_CONTENT_COACHING,
    SET_CONTENT_FAQ,
    SET_CONTENT_FEEDBACKS,
    SET_CONTENT_FOOD,
    SET_CONTENT_USERS,
} from './content-actions';
import { FeedbackModel } from '../../models/feedbacks-models/feedback-model';
import type { CoachingModel } from '../../models/coaching-models/coaching-model';
import type { FoodModel } from '../../models/food-models/food-model';
import type { FaqModel } from '../../models/faq/faq-model';

export type ContentStateModel = {
    coaches: CoachModel[];
    feedbacks: FeedbackModel[];
    coaching: CoachingModel[];
    food: FoodModel[];
    users: BaseUserModel[];
    faq: FaqModel[];
}

const initialState: ContentStateModel = {
    coaches: [],
    feedbacks: [],
    coaching: [],
    food: [],
    users: [],
    faq: []
};

function contentReducer(state = initialState, action): ContentStateModel {
    switch(action.type) {
        case SET_CONTENT_COACHES:
            return {
                ...state,
                coaches: action.payload
            };
        case SET_CONTENT_FEEDBACKS:
            return {
                ...state,
                feedbacks: action.payload
            };
        case SET_CONTENT_COACHING:
            return {
                ...state,
                coaching: action.payload
            };
        case SET_CONTENT_FOOD:
            return {
                ...state,
                food: action.payload
            };
        case SET_CONTENT_USERS:
            return {
                ...state,
                users: action.payload
            };
        case SET_CONTENT_FAQ:
            return {
                ...state,
                faq: action.payload
            };
        default:
            return state;
    }
}

export default contentReducer;
