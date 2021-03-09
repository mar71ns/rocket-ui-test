import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import launchCollection from './LaunchCollectionReducer';
import rocketCollection from './RocketCollectionReducer';
import appCollection from './AppCollectionReducer';

const rootReducer = combineReducers({
  launchCollection,
  rocketCollection,
  appCollection
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
