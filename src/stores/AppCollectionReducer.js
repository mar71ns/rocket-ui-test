import * as ACTIONS from '../actions/Types';

const initialState = {
  filter: {
    search: '',
    rocket_id: '',
    launch_success: '',
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.SET_FILTER:
      return {
        ...state,
        filter: {
          ...state.filter,
          [action.payload.id]: action.payload.value,
        }
      };
    case ACTIONS.RESET_FILTER:
      return {
        ...state,
        filter: initialState.filter,
      }
    default:
      return state;
  }
};

