import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import promiseReducer from './promise/promise.reducer';
import userReducer from './user/user.reducer';

const rootReducer = combineReducers({
  promises: promiseReducer,
  user: userReducer
});

export default store = createStore(rootReducer, applyMiddleware(thunk));