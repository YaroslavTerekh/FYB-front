import { Dispatch } from 'redux';
import { AnyAction } from 'redux';
import { getCoaches, getCoaching, getFaq, getFeedbacks, getFood } from '../../api/content-api';
import {
    setContentCoaches,
    setContentCoaching,
    setContentFAQ,
    setContentFeedbacks,
    setContentFood,
} from './content-actions';
import { writeError } from '../alert-context/alert-context-helper';

export function getContentCoachesHelper(dispatch: Dispatch<AnyAction>){
    getCoaches()
        .then(res => {
            dispatch(setContentCoaches(res.data));
        })
        .catch(err => {
            writeError(dispatch, err?.response?.data?.error ?? err?.message)
        });
}

export function getFeedbacksHelper(dispatch: Dispatch<AnyAction>){
    getFeedbacks()
        .then(res => {
            dispatch(setContentFeedbacks(res.data));
        })
        .catch(err => {
            writeError(dispatch, err?.response?.data?.error ?? err?.message)
        });
}

export function getCoachingHelper(dispatch: Dispatch<AnyAction>){
    getCoaching()
        .then(res => {
            dispatch(setContentCoaching(res.data));
        })
        .catch(err => {
            writeError(dispatch, err?.response?.data?.error ?? err?.message)
        });
}

export function getFoodHelper(dispatch: Dispatch<AnyAction>){
    getFood()
        .then(res => {
            dispatch(setContentFood(res.data));
        })
        .catch(err => {
            writeError(dispatch, err?.response?.data?.error ?? err?.message)
        });
}
export function getFAQHelper(dispatch: Dispatch<AnyAction>) {
    getFaq().then(res => {
        dispatch(setContentFAQ(res.data));
        return res.status === 200;
    }).catch(err => {
        writeError(dispatch, err?.response?.data?.error ?? err?.message)
    });
}
