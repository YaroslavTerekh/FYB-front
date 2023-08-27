import {combineReducers} from "redux";
import userReducer from './auth-context/user-reducer';

const rootReducer = combineReducers({user: userReducer});

export default rootReducer
