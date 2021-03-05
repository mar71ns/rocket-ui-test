import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import launchCollection from './LaunchCollectionReducer';
import rocketCollection from './RocketCollectionReducer';

const rootReducer = combineReducers({
  launchCollection,
  rocketCollection
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
