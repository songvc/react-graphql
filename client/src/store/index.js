import { combineReducers, createStore } from 'redux';
import * as session from './sessionStore';

const reducers = combineReducers(session);
const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;