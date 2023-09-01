import { addCoach, updateCoach } from '../../api/admin-api';
import { Dispatch } from 'redux';
import { AnyAction } from 'redux';
import { setCoaches } from './admin-actions';
import { getCoaches } from '../../api/content-api';

export function addNewCoachHelper(dispatch: Dispatch<AnyAction>, data: FormData) {
    addCoach(data).then(res => {
        debugger;
        getCoaches()
            .then(res => {
                debugger;
                dispatch(setCoaches(res.data));
            })
            .catch(err => {});
        return res.status === 200;
    }).catch(err => {});
}

export function updateCoachHelper(dispatch: Dispatch<AnyAction>, data: FormData, coachId: string) {
    updateCoach(data, coachId).then(res => {
        debugger;
        getCoaches()
            .then(res => {
                dispatch(setCoaches(res.data));
            })
            .catch(err => {});
        return res.status === 200;
    }).catch(err => {});
}

export function getCoachesHelper(dispatch: Dispatch<AnyAction>){
    getCoaches()
        .then(res => {
            debugger;
            dispatch(setCoaches(res.data));
        })
        .catch(err => {});
}
