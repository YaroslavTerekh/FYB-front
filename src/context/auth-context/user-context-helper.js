import { AnyAction, Dispatch } from 'redux';
import { getCurrentUser } from '../../api/auth-api';
import { setUser } from './user-actions';
import { setAlert } from '../alert-context/alert-actions';
import { writeError } from '../alert-context/alert-context-helper';

export function getCurrentUserHelper(dispatch: Dispatch<AnyAction>){
    getCurrentUser()
        .then(res => {
            dispatch(setUser(res.data));
        })
        .catch(err => {
            writeError(dispatch, err?.response?.data?.error ?? err?.message)
        });
}
