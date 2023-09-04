import type { BaseUserModel } from '../../models/user-models/base-user-model';
import type { CoachModel } from '../../models/coach-models/coach-model';
import type { FeedbackModel } from '../../models/feedbacks-models/feedback-model';
import type { CoachingModel } from '../../models/coaching-models/coaching-model';
import type { FoodModel } from '../../models/food-models/food-model';

export const SET_COACHES = 'SET_COACHES';
export const SET_FEEDBACKS = 'SET_FEEDBACKS';
export const SET_COACHING = 'SET_COACHING';
export const SET_FOOD = 'SET_FOOD';

export const setCoaches = (coaches: CoachModel[]) => {
    return {
        type: SET_COACHES,
        payload: coaches,
    };
};

export const setFeedbacks = (data: FeedbackModel[]) => {
    return {
        type: SET_FEEDBACKS,
        payload: data,
    };
};

export const setCoaching = (coaching: CoachingModel[]) => {
    return {
        type: SET_COACHING,
        payload: coaching,
    };
};

export const setFood = (data: FoodModel[]) => {
    return {
        type: SET_FOOD,
        payload: data,
    };
};
