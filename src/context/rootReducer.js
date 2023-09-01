import {combineReducers} from "redux";
import userReducer from './auth-context/user-reducer';
import adminReducer from './admin-data-context/admin-reducer';

const rootReducer = combineReducers({user: userReducer, admin: adminReducer});

export default rootReducer
