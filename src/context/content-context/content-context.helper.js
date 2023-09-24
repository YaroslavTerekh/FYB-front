import {
    addCoach,
    addCoaching,
    addCoachingDetails, addFAQPoint, addFeedback, addFood, addFoodPoint, addPhotosToCoaching,
    deleteCoach,
    deleteCoaching, deleteCoachingDetails, deleteFAQ, deleteFeedback, deleteFood, deleteFoodPoint, getUsers,
    updateCoach, updateFAQPoint, updateFeedback, updateFood, updateFoodPoint,
} from '../../api/admin-api';
import { Dispatch } from 'redux';
import { AnyAction } from 'redux';
import { getCoaches, getCoaching, getFaq, getFeedbacks, getFood } from '../../api/content-api';
import {
    setContentCoaches,
    setContentCoaching,
    setContentFAQ,
    setContentFeedbacks,
    setContentFood,
    setContentUsers,
} from './content-actions';
import { GetImgUrl } from '../../services/images-service';

export function getContentCoachesHelper(dispatch: Dispatch<AnyAction>){
    getCoaches()
        .then(res => {
            dispatch(setContentCoaches(res.data));
        })
        .catch(err => {});
}

export function getFeedbacksHelper(dispatch: Dispatch<AnyAction>){
    getFeedbacks()
        .then(res => {
            dispatch(setContentFeedbacks(res.data));
        })
        .catch(err => {});
}

export function getCoachingHelper(dispatch: Dispatch<AnyAction>){
    getCoaching()
        .then(res => {
            dispatch(setContentCoaching(res.data));
        })
        .catch(err => {});
}

export function getFoodHelper(dispatch: Dispatch<AnyAction>){
    getFood()
        .then(res => {
            dispatch(setContentFood(res.data));
        })
        .catch(err => {});
}
export function getFAQHelper(dispatch: Dispatch<AnyAction>) {
    getFaq().then(res => {
        dispatch(setContentFAQ(res.data));
        return res.status === 200;
    }).catch(err => {});
}
