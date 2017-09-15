import {
  FETCH_SHOTS
} from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_SHOTS:
      return [
        action.payload, ...state
      ];
    default:
      return state;
  }
}
