import { createStore, combineReducers, applyMiddleware } from 'redux';
import promise from 'redux-promise-middleware';
import budgetReducer from './ducks/budgetReducer';
import userReducer from './ducks/userReducer';

const rootReducer = combineReducers({ budget: budgetReducer, user: userReducer });
const store = createStore(rootReducer, applyMiddleware(promise));

export default store;
