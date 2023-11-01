import { setAlert } from './alert-actions';

export function writeError(dispatch, message) {
    dispatch(setAlert({ icon:"", isSuccess: false, message: message}));
}
