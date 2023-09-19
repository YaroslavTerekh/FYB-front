import type { BaseUserModel } from '../../models/user-models/base-user-model';
import type { CoachModel } from '../../models/coach-models/coach-model';
import type { FeedbackModel } from '../../models/feedbacks-models/feedback-model';
import type { CoachingModel } from '../../models/coaching-models/coaching-model';
import type { FoodModel } from '../../models/food-models/food-model';

export const SET_CONTENT_COACHES = 'SET_CONTENT_COACHES';
export const SET_CONTENT_FEEDBACKS = 'SET_CONTENT_FEEDBACKS';
export const SET_CONTENT_COACHING = 'SET_CONTENT_COACHING';
export const SET_CONTENT_FOOD = 'SET_CONTENT_FOOD';
export const SET_CONTENT_USERS = 'SET_CONTENT_USERS';
export const SET_CONTENT_FAQ = 'SET_CONTENT_FAQ';

export const setContentCoaches = (coaches: CoachModel[]) => {
    return {
        type: SET_CONTENT_COACHES,
        payload: coaches,
    };
};

export const setContentFeedbacks = (data: FeedbackModel[]) => {
    return {
        type: SET_CONTENT_FEEDBACKS,
        payload: data,
    };
};

export const setContentCoaching = (coaching: CoachingModel[]) => {
    return {
        type: SET_CONTENT_COACHING,
        payload: coaching,
    };
};

export const setContentFood = (data: FoodModel[]) => {
    return {
        type: SET_CONTENT_FOOD,
        payload: data,
    };
};

export const setContentUsers = (data: BaseUserModel[]) => {
    return {
        type: SET_CONTENT_USERS,
        payload: data,
    };
};

export const setContentFAQ = (data: BaseUserModel[]) => {
    return {
        type: SET_CONTENT_FAQ,
        payload: data,
    };
};
