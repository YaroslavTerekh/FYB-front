import {
    addCoach,
    addCoaching,
    addCoachingDetails, addFeedback,
    deleteCoach,
    deleteCoaching, deleteCoachingDetails,
    updateCoach,
} from '../../api/admin-api';
import { Dispatch } from 'redux';
import { AnyAction } from 'redux';
import { setCoaches, setCoaching, setFeedbacks } from './admin-actions';
import { getCoaches, getCoaching, getFeedbacks } from '../../api/content-api';

export function addNewCoachHelper(dispatch: Dispatch<AnyAction>, data: FormData) {
    addCoach(data).then(res => {
        getCoaches()
            .then(res => {
                dispatch(setCoaches(res.data));
            })
            .catch(err => {});
        return res.status === 200;
    }).catch(err => {});
}

export function updateCoachHelper(dispatch: Dispatch<AnyAction>, data: FormData, coachId: string) {
    updateCoach(data, coachId).then(res => {
        getCoaches()
            .then(res => {
                dispatch(setCoaches(res.data));
            })
            .catch(err => {});
        return res.status === 200;
    }).catch(err => {});
}

export function deleteCoachHelper(dispatch: Dispatch<AnyAction>, coachId: string) {
    deleteCoach(coachId).then(res => {
        getCoaches()
            .then(res => {
                dispatch(setCoaches(res.data));
            })
            .catch(err => {});
        return res.status === 200;
    }).catch(err => {});
}

export function deleteCoachingHelper(dispatch: Dispatch<AnyAction>, coachId: string) {
    deleteCoaching(coachId).then(res => {
        getCoaching()
            .then(res => {
                dispatch(setCoaching(res.data));
            })
            .catch(err => {});
        return res.status === 200;
    }).catch(err => {});
}

export function deleteCoachingDetailsHelper(dispatch: Dispatch<AnyAction>, id) {
    deleteCoachingDetails(id).then(res => {
        getCoaching()
            .then(res => {
                dispatch(setCoaching(res.data));
            })
            .catch(err => {});
        return res.status === 200;
    }).catch(err => {});
}

export function getCoachesHelper(dispatch: Dispatch<AnyAction>){
    getCoaches()
        .then(res => {
            dispatch(setCoaches(res.data));
        })
        .catch(err => {});
}


export function getFeedbacksHelper(dispatch: Dispatch<AnyAction>){
    getFeedbacks()
        .then(res => {
            debugger;
            dispatch(setFeedbacks(res.data));
        })
        .catch(err => {});
}

export function addNewFeedbacksHelper(dispatch: Dispatch<AnyAction>, data) {
    addFeedback(data).then(res => {
        getFeedbacks()
            .then(res => {

                dispatch(setFeedbacks(res.data));
            })
            .catch(err => {});
        return res.status === 200;
    }).catch(err => {});
}

export function updateFeedbacksHelper(dispatch: Dispatch<AnyAction>, data) {
    addFeedback(data).then(res => {
        getFeedbacks()
            .then(res => {

                dispatch(setFeedbacks(res.data));
            })
            .catch(err => {});
        return res.status === 200;
    }).catch(err => {});
}

export function addNewCoachingHelper(dispatch: Dispatch<AnyAction>, data: FormData) {
    addCoaching(data).then(res => {
        getCoaching()
            .then(res => {
                dispatch(setCoaching(res.data));
            })
            .catch(err => {});
        return res.status === 200;
    }).catch(err => {});
}

export function addNewCoachingDetailsHelper(dispatch: Dispatch<AnyAction>, data) {
    addCoachingDetails(data).then(res => {
        getCoaching()
            .then(res => {
                dispatch(setCoaching(res.data));
            })
            .catch(err => {});
        return res.status === 200;
    }).catch(err => {});
}

export function getCoachingHelper(dispatch: Dispatch<AnyAction>){
    getCoaching()
        .then(res => {
            dispatch(setCoaching(res.data));
        })
        .catch(err => {});
}
