import {
  FETCH_SHOTS
} from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_SHOTS:
      return { shots: action.payload };
    default:
      return state;
  }
}
