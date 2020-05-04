import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import placesToShowReducer from './places-to-show/places-to-show.reducer';
import promiseReducer from './promise/promise.reducer';
import userReducer from './user/user.reducer';

const rootReducer = combineReducers({
  placesToShow: placesToShowReducer,
  promises: promiseReducer,
  user: userReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store;