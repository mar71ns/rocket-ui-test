import * as ACTIONS  from '../actions/Types';

const initialState = {
  rockets: [],
  fetching: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.REQUEST_ROCKETS:
      return { 
        ...state,
        fetching: true
      };
    case ACTIONS.RECEIVE_ROCKETS:
      return { 
        ...state,
        fetching: false,
        rockets: [...state.rockets, ...action.payload.rockets]
      }
    default:
      return state;
  }
};

