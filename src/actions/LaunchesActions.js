import LaunchService from '../services/LaunchService';
import * as ACTIONS from './Types';

export const requestLaunches = () => ({
  type: ACTIONS.REQUEST_LAUNCHES
});

const receiveLaunches = response => ({
  type: ACTIONS.RECEIVE_LAUNCHES,
  payload: {
    launches: response.data
  }
});

const shouldFetchLaunches = launchCollection => !launchCollection || (launchCollection.launches.length === 0 && !launchCollection.fetching);

export const fetchLaunches = () => (dispatch) => {
    dispatch(requestLaunches());
    LaunchService.get().then(response => dispatch(receiveLaunches(response)));
  };

export const fetchLaunchesIfNeeded = ({ launchCollection }) => (dispatch) => {
  if (shouldFetchLaunches(launchCollection) ){
    dispatch(fetchLaunches());
  }
}

