import {combineReducers} from "redux";
import userReducer from './auth-context/user-reducer';
import adminReducer from './admin-data-context/admin-reducer';
import alertReducer from './alert-context/alert-reducer';
import contentReducer from './content-context/content-reducer';
import spinnerReducer from './spinner-context/spinner-reducer';

const rootReducer = combineReducers({
    user: userReducer,
    admin: adminReducer,
    alert: alertReducer,
    content :contentReducer,
    spinner: spinnerReducer
});

export default rootReducer
