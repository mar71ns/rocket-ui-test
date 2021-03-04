import { createStore, combineReducers, applyMiddleware } from 'redux';
import launchCollection from './LaunchCollectionReducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  launchCollection
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
