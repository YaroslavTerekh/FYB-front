import {
    addCoach,
    addCoaching,
    addCoachingDetails, addFeedback, addFood, addFoodPoint,
    deleteCoach,
    deleteCoaching, deleteCoachingDetails, deleteFeedback,
    updateCoach, updateFeedback, updateFood, updateFoodPoint,
} from '../../api/admin-api';
import { Dispatch } from 'redux';
import { AnyAction } from 'redux';
import { setCoaches, setCoaching, setFeedbacks, setFood } from './admin-actions';
import { getCoaches, getCoaching, getFeedbacks, getFood } from '../../api/content-api';

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

export function updateFeedbacksHelper(dispatch: Dispatch<AnyAction>, id, data) {
    updateFeedback(id, data).then(res => {
        getFeedbacks()
            .then(res => {

                dispatch(setFeedbacks(res.data));
            })
            .catch(err => {});
        return res.status === 200;
    }).catch(err => {});
}

export function deleteFeedbackHelper(dispatch: Dispatch<AnyAction>, id: string) {
    deleteFeedback(id).then(res => {
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

export function getFoodHelper(dispatch: Dispatch<AnyAction>){
    getFood()
        .then(res => {
            dispatch(setFood(res.data));
        })
        .catch(err => {});
}

export function addNewFoodHelper(dispatch: Dispatch<AnyAction>, data) {
    addFood(data).then(res => {
        getFood()
            .then(res => {
                dispatch(setFood(res.data));
            })
            .catch(err => {});
        return res.status === 200;
    }).catch(err => {});
}

export function updateFoodHelper(dispatch: Dispatch<AnyAction>, id, data) {
    updateFood(id, data).then(res => {
        getFood()
            .then(res => {
                dispatch(setFood(res.data));
            })
            .catch(err => {});
        return res.status === 200;
    }).catch(err => {});
}

export function addNewFoodPointHelper(dispatch: Dispatch<AnyAction>, data) {
    addFoodPoint(data).then(res => {
        getFood()
            .then(res => {
                dispatch(setFood(res.data));
            })
            .catch(err => {});
        return res.status === 200;
    }).catch(err => {});
}

export function updateFoodPointHelper(dispatch: Dispatch<AnyAction>, id, data) {
    updateFoodPoint(id, data).then(res => {
        getFood()
            .then(res => {
                dispatch(setFood(res.data));
            })
            .catch(err => {});
        return res.status === 200;
    }).catch(err => {});
}

