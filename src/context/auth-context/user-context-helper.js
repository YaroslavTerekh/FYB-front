import { AnyAction, Dispatch } from 'redux';
import { getCurrentUser } from '../../api/auth-api';
import { setUser } from './user-actions';

export function getCurrentUserHelper(dispatch: Dispatch<AnyAction>){
    getCurrentUser()
        .then(res => {
            dispatch(setUser(res.data));
        })
        .catch(err => {});
}
