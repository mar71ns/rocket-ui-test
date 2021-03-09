import RocketService from '../services/RocketService';
import * as ACTIONS from './Types';

export const requestRockets = () => ({
  type: ACTIONS.REQUEST_ROCKETS
});

const receiveRockets = response => ({
  type: ACTIONS.RECEIVE_ROCKETS,
  payload: {
    rockets: response.data
  }
});

const shouldFetchRockets = rocketCollection => !rocketCollection || (rocketCollection.rockets.length === 0 && !rocketCollection.fetching);
                        
export const fetchRockets = () => {
  return (dispatch) => {
    dispatch(requestRockets());
    RocketService.get().then(response => dispatch(receiveRockets(response)));
  }
};

export const fetchRocketsIfNeeded = ({ rocketCollection }) => (dispatch) => {
  if( shouldFetchRockets(rocketCollection) ){
    return dispatch(fetchRockets());
  }
}
