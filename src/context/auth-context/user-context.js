import { applyMiddleware, createStore } from 'redux';
import userReducer from './user-reducer';


const store = createStore(userReducer)
