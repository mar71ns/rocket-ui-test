import * as ACTIONS  from '../actions/Types';

const initialState = {
  launches: [],
  fetching: false,  
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.REQUEST_LAUNCHES:
      return { 
        ...state,
        launches: [],
        fetching: true
      };
    case ACTIONS.RECEIVE_LAUNCHES:
      return { 
        ...state,
        fetching: false,
        launches: [...state.launches, ...action.payload.launches]
      }
    default:
      return state;
  }
};

