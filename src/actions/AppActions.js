import * as ACTIONS from './Types';

export function applyFilter ( collection, filter ) {
  let result = collection;
  Object.entries(filter).map(([id,value]) => {
    if(value !== ''){
      if ( id === 'rocket_id'){
        result = result.filter((item) => item.rocket.rocket_id === value );
      } else {
        result = result.filter((item) => item[id] === value );
      }
    }
  });
  return result;
}

export const setFilter = ({ id, value }) => ({
  type: ACTIONS.SET_FILTER,
  payload: { id, value }
});

export const resetFilter = () => ({
  type: ACTIONS.RESET_FILTER,
});
