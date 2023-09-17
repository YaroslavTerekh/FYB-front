import {combineReducers} from "redux";
import userReducer from './auth-context/user-reducer';
import adminReducer from './admin-data-context/admin-reducer';
import alertReducer from './alert-context/alert-reducer';

const rootReducer = combineReducers({user: userReducer, admin: adminReducer, alert: alertReducer});

export default rootReducer
